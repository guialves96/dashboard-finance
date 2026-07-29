import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";
import { Badge } from "./badge";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type == TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-deposit/10 font-bold text-deposit hover:bg-deposit/20">
        <CircleIcon className="mr-1 fill-deposit" size={8} />
        Ganho
      </Badge>
    );
  }
  if (transaction.type == TransactionType.EXPENSE) {
    return (
      <Badge className="hover: bg-danger/10 font-bold text-danger hover:bg-danger/20">
        <CircleIcon className="mr-1 fill-danger" size={8} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-white/10 font-bold text-white hover:bg-white/20">
      <CircleIcon className="mr-1 fill-white" size={8} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
