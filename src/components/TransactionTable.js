
import React, { useState, useEffect } from "react";
import { useTransactionContext } from "../context/transactionContext";
import { BsArrowDown, BsArrowUp, BsThreeDotsVertical } from "react-icons/bs"; 
import { useNavigate } from 'react-router-dom';
const TransactionTable = () => {
  const { state, updateTotalTransactions,updateTotalAmount,updateStatus3Count,updateCurrentTransaction } = useTransactionContext();
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [totalTransactions, setTotalTransaction] = useState(0);
  const navigate = useNavigate();
  const navigateToTransactionDetail = (transactionId,transaction) => {
    updateCurrentTransaction(transaction)
    navigate(`/transaction/${transactionId}`);
  };
  const sortedData = [...state.transactions];
  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  

  console.log("TTkkk", totalTransactions);
  useEffect(() => {
    const total = sortedData.length;
    setTotalTransaction(total);
  }, [sortedData]);
 

  useEffect(() => {

    if (totalTransactions) {
      console.log("TT", totalTransactions);
      updateTotalTransactions(totalTransactions);
    }
  }, [totalTransactions]);

  const totalAmount = sortedData.reduce((total, transaction) => total + transaction.amount, 0);
  function countTransactionsWithStatus(transactions, status) {
    return transactions.filter(transaction => transaction.status === status).length;
  }

  useEffect(() => {
   updateTotalAmount(totalAmount);
  }, [totalAmount]);

  const status3Count = countTransactionsWithStatus(sortedData, 3);
  useEffect(() => {
    updateStatus3Count(status3Count);
   }, [status3Count]);
 

  return (
    <div className="my-4 flex justify-center items-center">
      <table className="border border-gray-300">
        <thead className="bg-[#e7ebee] text-black font-light">
          <tr>
            <HeaderCell
              label="Transaction Date"
              onClick={() => requestSort("transactionDate")}
              isSorted={sortConfig.key === "transactionDate"}
              direction={sortConfig.direction}
            />
            <HeaderCell
              label="Invoice Number"
              onClick={() => requestSort("invoiceNumber")}
              isSorted={sortConfig.key === "invoiceNumber"}
              direction={sortConfig.direction}
            />
            <HeaderCell
              label="Payer"
              onClick={() => requestSort("payer")}
              isSorted={sortConfig.key === "payer"}
              direction={sortConfig.direction}
            />
            <HeaderCell
              label="Payee"
              onClick={() => requestSort("payee")}
              isSorted={sortConfig.key === "payee"}
              direction={sortConfig.direction}
            />
            <HeaderCell
              label="Amount"
              onClick={() => requestSort("amount")}
              isSorted={sortConfig.key === "amount"}
              direction={sortConfig.direction}
            />
            <HeaderCell
              label="USD Equivalent"
              onClick={() => requestSort("usdEquivalent")}
              isSorted={sortConfig.key === "usdEquivalent"}
              direction={sortConfig.direction}
            />
            <HeaderCell
              label="Status"
              onClick={() => requestSort("status")}
              isSorted={sortConfig.key === "status"}
              direction={sortConfig.direction}
            />
            <HeaderCell
              label="Action"
              onClick={() => requestSort("action")}
              isSorted={sortConfig.key === "action"}
              direction={sortConfig.direction}
            />
          </tr>
        </thead>
        {/* Table rows */}
        <tbody>
          {sortedData.map((transaction, index) => (
            <tr 
            onClick={()=>navigateToTransactionDetail(transaction.id, transaction)}
             key={index} className="border-b  text-[#cacacd] text-sm">
            
              <td>{transaction.transactionDate}</td>
              <td className=" text-[#5eb0ea] underline py-2">
                {transaction.invoiceNumber}
              </td>
              <td>{transaction.payer}</td>
              <td>{transaction.payee}</td>
              <td>₹ {transaction.amount}</td>
              <td>{transaction.usdEquivalent}</td>
              <td>{transaction.status === 1? "First": transaction.status === 2? "Second" : "Thrid"}</td>
              <td className="border border-gray-300 text-black">
                {" "}
                <BsThreeDotsVertical size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const HeaderCell = ({ label, onClick, isSorted, direction }) => {
  return (
    <th onClick={() => onClick(label)}>
      <div className="flex items-center pd-4 mx-3">
        {label}
        <span className="sorting-icons mx-4">
          {isSorted && direction === "ascending" ? (
            <BsArrowUp size={12} />
          ) : (
            <BsArrowDown size={12} />
          )}
        </span>
      </div>
    </th>
  );
};

export default TransactionTable;
