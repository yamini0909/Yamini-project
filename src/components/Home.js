import AmountCard from "./AmountCnt";
import Card from "./Card";
import TransactionTable from "./TransactionTable";

const Home = () => {
  return (
    <div className="main max-w-7xl mx-auto my-0">
      <div className="card-cnt  md:flex mx-20"> 
        <Card />
        <AmountCard type="amount"/>
        <AmountCard type="status"/>
      </div>
      <div className="table-cnt">
        <TransactionTable />
      </div>
    </div>
  );
};

export default Home;
