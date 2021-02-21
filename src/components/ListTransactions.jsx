import React from "react";
import { useFetch } from "../hooks/useTransaction";
import { ItemTransaction } from "./ItemTransaction";
import "./Transactions.css";

export const ListTransactions = () => {
  let transactions = [
    {
      type: "credit", // // backgroud color for credit transactions #bdd5f8
      amount: "5000",
      leaseDate: new Date(),
      id: "1",
      fullName: "Carlos Zaburlin",
    },
    {
      type: "debit", // backgroud color for debit transactions #e7f1ff
      amount: "2500",
      leaseDate: new Date(),
      id: "2",
      fullName: "Carlos Zaburlin",
    },
    {
      type: "credit",
      amount: "5000",
      leaseDate: new Date(),
      id: "3",
      fullName: "Carlos Zaburlin",
    },
  ];

  // First setp - make request using postman
  // POST - http://localhost:8080/set-amount body=> {"amount": 5000}
  // Second step - make request using postman
  // POST - http://localhost:8080/new-transaction body=> {"amount": 500,"type": "debit"}
  // POST - http://localhost:8080/new-transaction body=> {"amount": 500,"type": "debit"}
  // POST - http://localhost:8080/new-transaction body=> {"amount": 500,"type": "credit"}

  const req = useFetch("http://localhost:8080/transactions");

  const { data } = req;
  if (data && data.transactions) transactions = req.data.transactions;

  const dataFrom = data ? "Data from server" : "Hardcoded data";

  return (
    <div className="transaction">
      <h3>{dataFrom}</h3>
      {transactions &&
        transactions.map((transaction) => (
          <ItemTransaction key={transaction.id} transaction={transaction} />
        ))}
    </div>
  );
};
