import React from "react";
import { ItemTransaction } from "./ItemTransaction";
import "./Transactions.css";

export const ListTransactions = () => {
  const transactions = [
    {
      type: "credit", // // backgroud color for credit transactions #bdd5f8
      amount: "5000",
      leaseDate: new Date(),
      id: "123456",
      fullName: "Carlos Zaburlin",
    },
    {
      type: "debit", // backgroud color for debit transactions #e7f1ff
      amount: "2500",
      leaseDate: new Date(),
      id: "654231",
      fullName: "Carlos Zaburlin",
    },
    {
      type: "credit",
      amount: "5000",
      leaseDate: new Date(),
      id: "123564",
      fullName: "Carlos Zaburlin",
    },
  ];

  return (
    <div className="transaction">
      {transactions &&
        transactions.map((transaction) => (
          <ItemTransaction key={transaction.id} transaction={transaction} />
        ))}
    </div>
  );
};
