import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";

const TransactionsPage = async () => {
  // acessar as transações do banco de dados
  const transactions = await db.transaction.findMany({});
  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="flex w-full items-center justify-between p-6">
          <h2 className="text-2xl font-bold">Transações</h2>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionsColumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;
