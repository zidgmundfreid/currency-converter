import React from 'react';
import './header.css';

const Header = (props) => {
  const uahToUsd =
    (2 - props.rates['USD'] / props.rates['EUR']) * (props.rates['EUR'] * props.rates['UAH']);
  const uahToEur = props.rates['EUR'] * props.rates['UAH'];

  return (
    <div>
        <div className="currency-block"><h3>UAH - USD</h3><h3>{uahToUsd.toFixed(2)}</h3></div>
        <div className="currency-block"><h3>UAH - EUR</h3><h3>{uahToEur.toFixed(2)}</h3></div>

    </div>
  );
};

export default Header;
