import { FaScroll } from "react-icons/fa6";
import { useTransactionContext } from '../context/transactionContext';

const AmountCard = ({type}) => {
  const { state } = useTransactionContext();
  const totalAmount = state.totalAmount;
  const totalStatus = state.totalStatusCount;
  return (
    <>
      <div className="card flex w-full sm:w-1/2 md:w-1/5 my-10 bg-[#f9f9f9] mx-auto p-4 sm:p-5 md:p-6 gap-4">
        <div className="flex flex-col items-start mb-4 sm:mb-6 md:mb-20">
          <FaScroll size={26} color="#f49556" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-baseline">
            <h2 className="text-[#656990] text-sm font-bold">{type ==='amount'? "Total Amount" : "Previous Cycle"}</h2>
          </div>
          <div className="text-center">
            <h4 className="text-[#c7c7c7] text-sm sm:text-base md:text-lg text-left">{type ==='amount'? "Total Amount" : ""}</h4>
            <div className="flex items-baseline">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#090b4c]">
              {type==="amount" ? totalAmount:totalStatus}
              </h2>
              <span className="mx-2 font-bold text-[#090b4c]">
                USD
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmountCard;
