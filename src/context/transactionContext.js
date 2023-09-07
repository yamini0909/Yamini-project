import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { dummyData } from "../data/transactionsData";
// Define initial state and reducer action types
const initialState = {
  transactions: [], // Your transaction data here
  totalTransactions: 0,
  totalAmount: 0,
  totalStatusCount:0, // Initialize totalTransactions to 0
  currentTransaction : {},
};


const SET_TRANSACTIONS = "SET_TRANSACTIONS";


const TransactionContext = createContext();

const ADD_TRANSACTION = 'ADD_TRANSACTION';
const UPDATE_TOTAL_TRANSACTIONS = 'UPDATE_TOTAL_TRANSACTIONS'; 
const UPDATE_TOTAL_AMOUNT = 'UPDATE_TOTAL_AMOUNT';
const UPDATE_STATUS = 'UPDATE_STATUS';
const UPDATE_CURRENT_TRANSACTION ='UPDATE_CURRENT_TRANSACTION'

const transactionReducer = (state, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
  
      case ADD_TRANSACTION:
    
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case UPDATE_TOTAL_TRANSACTIONS: 
      return {
        ...state,
        totalTransactions: action.payload,
      };
      case UPDATE_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: action.payload,
      };
      case UPDATE_STATUS:
      return {
        ...state,
        totalStatusCount: action.payload,
      };
      case UPDATE_CURRENT_TRANSACTION:
        return{
          ...state,
          currentTransaction: action.payload,
        }
    default:
      return state;
  }
};


export const useTransactionContext = () => {
  return useContext(TransactionContext);
};

const fetchDummyData = async () => {
  return new Promise((resolve) => {
    
    setTimeout(() => {
      resolve(dummyData);
    }, 1000);
  });
};

// TransactionProvider component
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dummyData = await fetchDummyData();
        dispatch({ type: SET_TRANSACTIONS, payload: dummyData });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };
  const updateTotalTransactions = (total) => {
    dispatch({ type: UPDATE_TOTAL_TRANSACTIONS, payload: total });
  };

  const updateTotalAmount = (total) => {
    dispatch({ type: UPDATE_TOTAL_AMOUNT, payload: total });
  };
  const updateStatus3Count =(total)=>{
    dispatch({ type: UPDATE_STATUS, payload: total });
  }
  const updateCurrentTransaction =(data)=>{
    dispatch({ type: UPDATE_CURRENT_TRANSACTION, payload: data });
  }
  return (
    <TransactionContext.Provider value={{ state, isLoading, addTransaction,updateTotalTransactions,updateTotalAmount,updateStatus3Count,updateCurrentTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
};

