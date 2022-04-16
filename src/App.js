import './App.css';
import CurrencyInput from './components/CurrencyInput';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get('http://data.fixer.io/api/latest?access_key=ab960f9b8252bc2aa8b7dfbdd1f4abba')
      .then((response) => {
        setRates(response.data.rates);

          
      });

   
 
  }, []);


  const actualRates1 = Object.keys(rates).filter(el => el === "UAH" )
  const actualRates2 = Object.keys(rates).filter(el => el === "USD" || el === "EUR"  )
  

  function format (number) {
    return number.toFixed(4)

  }

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }


  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div>
      <Header rates={rates}/>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={actualRates1}
        amount={amount1}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={actualRates2}
        amount={amount2}
        currency={currency2} />
    </div>
  );
}

export default App;
