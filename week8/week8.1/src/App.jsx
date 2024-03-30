import "./App.css";
import RevenueCard from "./components/RevenueCard";

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <RevenueCard
        title={"Amount Pending"}
        amount={"92,312.20"}
        orderCount={12}
      />
    </div>
    // <div className="text-center sm:text-left">Hello</div>
  );
}

export default App;
