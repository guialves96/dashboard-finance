import { ArrowDownUp } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_columns";

const TransactionsPage = async () => {
  // acessar as transações do banco de dados
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6">
      <div className="flex w-full items-center justify-between p-6">
        <h2 className="text-2xl font-bold">Transações</h2>
        <Button className="rounded-full font-bold">
          Adicionar transação
          <ArrowDownUp />
        </Button>
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
