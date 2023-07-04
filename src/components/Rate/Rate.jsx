import React, { useState } from 'react';
import './Rate.scss';

function Rate({ maxRate, onRate }) {
  const rateOptions = Array(maxRate).fill(0).map((_, i) => i + 1);

  const [rate, setRate] = useState(0);

  const handleClick = (selectedRate) => {
    setRate(selectedRate);
    onRate(selectedRate);
  };

  return (
    <fieldset className="rate">
      {rateOptions.map((item) => (
        <button
          key={`rate-${item}`}
          className={`rate__button ${item <= rate ? 'rate__button--selected' : ''}`}
          type="button"
          aria-label={`Vote ${item}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </fieldset>
  );
}

export default Rate;
