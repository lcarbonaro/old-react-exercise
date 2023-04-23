import React from "react";

function Transaction({ transaction }) {
  if (!Array.isArray(transaction)) {
    return null;
  }

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
        {transaction.map((t) => (
          <tr key={t.id}>
            <td>{t.category}</td>
            <td>{t.description}</td>
            <td>{t.date}</td>
            <td>{t.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Transaction;
