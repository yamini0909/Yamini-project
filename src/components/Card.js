import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import AmountCard from "./AmountCnt";
import { useTransactionContext } from '../context/transactionContext';


const Card = () => {
    const { state } = useTransactionContext();
const totalTransactions = state.totalTransactions;
  return (
    <>
      <div className="card my-10 bg-[#e3e8ff] mx-auto p-4 sm:p-6 md:p-10">
        <div className="flex items-center">
          <div className="mr-3">
            <AiOutlineDollarCircle size={36} color="#42a1e6" />
          </div>
          <div>
            <div className="flex justify-between items-baseline">
              <h2 className="text-[#0078ff] text-xl sm:text-2xl md:text-4xl font-bold">{totalTransactions}</h2>
              <span className="mx-2 font-bold">USD</span>
            </div>
            <div className="flex items-baseline">
              <h4 className="text-[#44ac94] font-bold">1.25%</h4>
              <span className="mx-2 font-bold"><BsGraphUpArrow color="#44ac94" /></span>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default Card;
