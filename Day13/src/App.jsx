
import { useState } from 'react';
import './App.css'
import CurrencyInput from "./components/CurrencyInput";

const EXCHANGE_RATE = 1300;
function App() {
  const [exchangeRate, setExchangeRate] = useState({krw:0,usd:0});
const onChangeHandler = (currency, value) => {
  if (currency === "krw") {
    setExchangeRate({
      krw: value,
      usd: value / EXCHANGE_RATE,
    });
  } else {
    setExchangeRate({
      krw: value * EXCHANGE_RATE,
      usd: value,
    });
  }
};
  console.log("exchangeRate", exchangeRate);
  return (
    <main>
      <h2>환율 변환기 (KRW-USD)</h2>

      <section>
        <CurrencyInput
          exchangeRate={"krw"}
          onChangeHandler={onChangeHandler}
          value={exchangeRate.krw}
        />
      </section>
      <section>
        <CurrencyInput
          exchangeRate={"usd"}
          onChangeHandler={onChangeHandler}
          value={exchangeRate.usd}
        />
      </section>
    </main>
  );
}

export default App
