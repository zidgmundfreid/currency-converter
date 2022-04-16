
import './currencyInput.css';

function CurrencyInput(props) {
  return (
    <div className="group">
      <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
      <select value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
        {props.currencies.map(((currency, idx) => (
          <option key={idx+1} value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}



export default CurrencyInput;