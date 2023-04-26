import React from "react";

function TransactionTable({transactions}) {
  //const [transactions, setTransactions] = useState([]);

  //useEffect(() => {
  //  fetch("http://localhost:3030/transactions")
  //    .then((res) => res.json())
  //    .then((data) => setTransactions(transaction))
  //    .catch((error) => console.log(error));
  //}, []);

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
