// Form.js
import React, { useState } from "react";
import transactionsArray from "./Array"; // Import the transactions array

function Form() {
  const [isDate, setIsDate] = useState("");
  const [isDescription, setIsDescription] = useState("");
  const [isCategory, setIsCategory] = useState("");
  const [isAmount, setIsAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Create a new transaction object
    const newTransaction = {
      id: Date.now(), // Generate unique id (assuming id is not provided)
      date: isDate,
      description: isDescription,
      category: isCategory,
      amount: parseFloat(isAmount)
    };

    // Reset input fields after submission
    setIsDate("");
    setIsDescription("");
    setIsCategory("");
    setIsAmount("");

    // Add the new transaction to the transactions array
    transactionsArray.push(newTransaction);
  }

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={isDate} onChange={(e) => setIsDate(e.target.value)} required />
        <input type="text" name="description" placeholder="Description" value={isDescription} onChange={(e) => setIsDescription(e.target.value)} required />
        <input type="text" name="category" placeholder="Category" value={isCategory} onChange={(e) => setIsCategory(e.target.value)} required />
        <input type="number" name="amount" placeholder="Amount" value={isAmount} onChange={(e) => setIsAmount(e.target.value)} required />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default Form;
