
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTransactionContext } from "../context/transactionContext";

const TransactionDetail = () => {
  const { state } = useTransactionContext();
  const currentTransactions = state.currentTransaction;
  const { transactionId } = useParams();
  const [formData, setFormData] = useState(currentTransactions);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSave(formData);
  };

 

  return (
    <form onSubmit={handleSubmit} className="card p-4 bg-blue-300 text-white rounded">
        <div className="mb-4 flex flex-col">
        <label htmlFor="transactionDate" className="text-white">Transaction Date:</label>
        <input
          type="text"
          id="transactionDate"
          name="transactionDate"
          value={formData.transactionDate}
          onChange={handleInputChange}
          className="rounded text-[#2596be] border p-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="invoiceNumber" className="text-white">Invoice Number:</label>
        <input
          type="text"
          id="invoiceNumber"
          name="invoiceNumber"
          value={formData.invoiceNumber}
          onChange={handleInputChange}
          className="rounded text-[#2596be] border p-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="text-white" htmlFor="payer">Payer:</label>
        <input
          type="text"
          id="payer"
          name="payer"
          value={formData.payer}
          onChange={handleInputChange}
          className="rounded text-[#2596be] border p-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="payee" className="text-white">Payee:</label>
        <input
          type="text"
          id="payee"
          name="payee"
          value={formData.payee}
          onChange={handleInputChange}
          className="rounded text-[#2596be] border p-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="amount" className="text-white">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          className="rounded text-[#2596be] border p-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="usdEquivalent" className="text-white">USD Equivalent:</label>
        <input
          type="text"
          id="usdEquivalent"
          name="usdEquivalent"
          value={formData.usdEquivalent}
          onChange={handleInputChange}
          className="rounded text-[#2596be] border p-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="status" className="text-white">Status:</label>
        <input
          type="number"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          className="rounded text-[#2596be] border p-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="action" className="text-white">Action:</label>
        <input
          type="text"
          id="action"
          name="action"
          value={formData.action}
          onChange={handleInputChange}
          className="rounded text-[#2596be] border p-1 focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      
      <button type="submit" className="bg-white text-blue-500 rounded p-2">Save</button>
    </form>
  )
};

export default TransactionDetail;
