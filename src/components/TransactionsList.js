import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;
