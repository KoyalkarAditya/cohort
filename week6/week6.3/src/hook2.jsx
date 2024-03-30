import { memo, useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100000,
      });
    }, 5000);
  }, []);
  useEffect(() => {
    setExchangeData2({
      returns: 1000,
    });
    setExchangeData({
      returns: 1000,
    });
  }, []);

  const cryptoReturns = useCallback(() => {
    //useCallback is used to remember a function so to not make react think the function prop is changed when re-render when we use memo in a function
    return exchangeData.returns + exchangeData2.returns;
  }, [exchangeData, exchangeData2]);

  return (
    <div>
      <Child cryptoReturns={cryptoReturns} />
    </div>
  );
}
const Child = memo(({ cryptoReturns }) => {
  // memo lets us render the component only when props are changed
  console.log("child component");
  return <div> The total cryptoReturns are {cryptoReturns()}</div>;
});

export default App;
