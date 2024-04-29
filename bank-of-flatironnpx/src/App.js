// App.js
import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import Transaction from "./components/Transactions";
import transactionsArray from "./components/Array";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Handler function to update the search term state
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered transactions based on the search term
  const filteredTransactions = transactionsArray.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Transaction Management</h1>
        <Form />
        <input
          type="text"
          placeholder="Search transactions by description..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Transaction transactions={filteredTransactions} />
      </header>
    </div>
  );
}

export default App;
