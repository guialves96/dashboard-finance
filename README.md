# 💰 Finance AI

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql)
![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe)
![OpenAI](https://img.shields.io/badge/OpenAI-AI-412991?logo=openai)
![License](https://img.shields.io/badge/license-MIT-green)

Aplicação Full Stack desenvolvida com **Next.js**, **TypeScript** e **Prisma**, voltada para o gerenciamento financeiro pessoal.

O sistema permite controlar receitas e despesas, visualizar indicadores financeiros através de gráficos, autenticar usuários, realizar upgrade para um plano Premium via **Stripe** e utilizar recursos de Inteligência Artificial através da **API da OpenAI** para geração de insights financeiros.

Além do desenvolvimento do projeto, realizei sua atualização para versões atuais das principais bibliotecas utilizadas, adaptando mudanças de APIs e tipagens que não estavam presentes na versão original.

---

# 🚀 Demonstração

🌐 **Aplicação**

https://dashboard-finance-x3ph.vercel.app/

💻 **Repositório**

https://github.com/guialves96/dashboard-finance

---

# 📸 Preview

```
/public/preview-login.png
/public/preview-dashboard.png
/public/preview-transactions.png
/public/preview-ai.png
```

---

# ✨ Funcionalidades

## 📊 Dashboard Financeiro

- Visualização do saldo
- Receitas
- Despesas
- Gráficos interativos
- Resumo financeiro

## 💳 Transações

- Cadastro de receitas
- Cadastro de despesas
- Categorias
- Exclusão de transações
- Atualização automática dos indicadores

## 🤖 Inteligência Artificial

- Geração automática de insights financeiros
- Análise dos gastos
- Recomendações utilizando a API da OpenAI

## 🔐 Autenticação

- Login seguro
- Cadastro de usuários
- Controle de sessões

Implementado utilizando:

- Clerk Authentication

## 💎 Plano Premium

- Checkout Stripe
- Assinaturas
- Webhooks
- Atualização automática do plano Premium
- Controle de acesso aos recursos pagos

## ☁️ Deploy

- Vercel
- Banco PostgreSQL
- Prisma ORM

---

# 🛠 Tecnologias

## Front-end

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- shadcn/ui
- React Hook Form
- Zod
- React Number Format
- React Day Picker
- Recharts
- Lucide Icons

## Back-end

- Next.js Server Actions
- Prisma ORM
- PostgreSQL
- Clerk
- Stripe
- OpenAI API

## Ferramentas

- Vercel
- Git
- GitHub
- ESLint
- Prettier

---

# 📂 Estrutura do projeto

```
app/
components/
actions/
lib/
prisma/
public/
```

---

# 🚀 Como executar

Clone o projeto

```bash
git clone https://github.com/guialves96/dashboard-finance.git
```

Entre na pasta

```bash
cd dashboard-finance
```

Instale as dependências

```bash
npm install
```

Configure as variáveis de ambiente

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

OPENAI_API_KEY=

NEXT_PUBLIC_APP_URL=
```

Execute as migrations

```bash
npx prisma migrate deploy
```

ou

```bash
npx prisma migrate dev
```

Execute o projeto

```bash
npm run dev
```

---

# 🎯 Principais aprendizados

Durante o desenvolvimento deste projeto aprofundei conhecimentos em:

- Arquitetura Full Stack com Next.js
- Server Actions
- Prisma ORM
- Modelagem de banco de dados
- PostgreSQL
- Integração com Stripe
- Webhooks
- Autenticação com Clerk
- Consumo de APIs
- Integração com OpenAI
- Deploy na Vercel
- TypeScript avançado
- Validação com Zod
- React Hook Form
- Componentização
- Responsividade
- Tratamento de erros
- Atualização de bibliotecas para versões recentes

---

# 📈 Melhorias implementadas

Além do conteúdo do projeto original, foram realizadas diversas adaptações para versões atuais das bibliotecas, incluindo:

- Atualização de tipagens do React
- Adequação ao React Hook Form atual
- Ajustes para React Day Picker v10
- Compatibilidade com Date-fns v4
- Atualização do Stripe SDK
- Atualização do Clerk SDK
- Ajustes no Prisma
- Correções de tipagem do TypeScript
- Adequações para deploy na Vercel

---

# 🔮 Próximas melhorias

- Testes automatizados (Jest / Playwright)
- Dashboard com filtros avançados
- Exportação para PDF
- Exportação para Excel
- Tema Dark/Light
- Internacionalização
- Notificações em tempo real

---

# 👨‍💻 Autor

**Guilherme Alves**

💼 LinkedIn

https://linkedin.com/in/guilherme-alves-lourenço-571811209

💻 GitHub

https://github.com/guialves96

---

⭐ Se este projeto foi interessante para você, considere deixar uma estrela no repositório.
