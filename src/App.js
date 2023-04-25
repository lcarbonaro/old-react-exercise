import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Filter from "./components/Filter";
import TransactionTable from "./components/TransactionTable";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleFilter = (searchTerm) => {
    const filtered = transactions.filter((transaction) => {
      return transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h3>The Royal Bank of Flatiron</h3>
      <Filter handleFilter={handleFilter} />
      <Form onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}
export default App;
