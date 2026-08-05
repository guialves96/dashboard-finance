import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-10-28.acacia",
});

export async function POST(request: Request) {
  try {
    // Validação das variáveis de ambiente
    if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
      console.error("Variáveis do Stripe não configuradas.");

      return NextResponse.json(
        { error: "Stripe configuration missing." },
        { status: 500 },
      );
    }

    // Obtém a assinatura enviada pelo Stripe
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      console.error("Stripe-Signature não encontrada.");

      return NextResponse.json(
        { error: "Missing Stripe Signature." },
        { status: 400 },
      );
    }

    // Corpo da requisição
    const body = await request.text();

    // Validação da assinatura
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );

    console.log(`Webhook recebido: ${event.type}`);

    // Clerk Client (API atual)
    const client = await clerkClient();

    switch (event.type) {
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice & {
          parent?: {
            subscription_details?: {
              metadata?: {
                clerk_user_id?: string;
              };
              subscription?: string;
            };
          };
        };

        const clerkUserId =
          invoice.parent?.subscription_details?.metadata?.clerk_user_id;

        const subscriptionId =
          invoice.parent?.subscription_details?.subscription;

        if (!clerkUserId) {
          console.error("clerk_user_id não encontrado.");

          return NextResponse.json(
            { error: "User not found in metadata." },
            { status: 400 },
          );
        }

        await client.users.updateUserMetadata(clerkUserId, {
          publicMetadata: {
            subscriptionPlan: "premium",
          },
          privateMetadata: {
            stripeCustomerId: invoice.customer,
            stripeSubscriptionId: subscriptionId,
          },
        });

        console.log(`Usuário ${clerkUserId} atualizado para Premium.`);

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = await stripe.subscriptions.retrieve(
          event.data.object.id,
        );

        const clerkUserId = subscription.metadata.clerk_user_id;

        if (!clerkUserId) {
          console.error("clerk_user_id não encontrado.");

          return NextResponse.json(
            { error: "User not found." },
            { status: 400 },
          );
        }

        await client.users.updateUser(clerkUserId, {
          privateMetadata: {
            stripeCustomerId: null,
            stripeSubscriptionId: null,
          },
          publicMetadata: {
            subscriptionPlan: null,
          },
        });

        console.log(`Plano Premium removido de ${clerkUserId}.`);

        break;
      }

      default:
        console.log(`Evento ignorado: ${event.type}`);
    }

    return NextResponse.json(
      {
        received: true,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Erro no webhook:", error);

    if (error instanceof Stripe.errors.StripeSignatureVerificationError) {
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
