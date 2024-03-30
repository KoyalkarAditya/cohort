import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100000,
      }); //If we dont't use use effect after 1 sec the state value changes so re - render happen and the setTimeout will again be defined and this continue in infinite loop
    }, 5000);
    setTimeout(() => {
      setExchangeData2({
        returns: 1000,
      });
    }, 1000);
    setTimeout(() => {
      setExchangeData({
        returns: 1000,
      });
    }, 2000);
  }, []);

  const cryptoReturns = useMemo(() => {
    console.log("hello");
    return exchangeData.returns + exchangeData2.returns;
    // this only runs when any of the dependency array changes and it is used when a value is dependent on the state value.
  }, [exchangeData, exchangeData2]);
  const incomeTax = (bankData.income + cryptoReturns) * 0.3;

  return <div>hi there your tax returns are {incomeTax}</div>;
}

export default App;
