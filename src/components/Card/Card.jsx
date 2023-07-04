import React, { useState } from 'react';
import Vote from '../Vote/Vote';
import Result from '../Result/Result';
import './Card.scss';

function Card() {
  const [rate, setRate] = useState(0);
  const maxRate = 5;

  const handleVote = (selectedRate) => {
    setRate(selectedRate);
  };

  return (
    <article className="card">
      {
        rate === 0 ? (<Vote maxRate={maxRate} onVote={handleVote} />)
          : (<Result maxRate={maxRate} rate={rate} onResetVote={() => handleVote(0)} />)
      }
    </article>
  );
}

export default Card;
