import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { TransactionProvider } from "./context/transactionContext";
import TransactionDetail from "./components/TransactionDetail";

const App = () => {
  return (
    <div className="App">
      <TransactionProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={`/transaction/:id`} element={<TransactionDetail/>}></Route>
        </Routes>
      </TransactionProvider>
    </div>
  );
};

export default App;
