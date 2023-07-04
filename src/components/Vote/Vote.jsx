import React, { useState } from 'react';
import Rate from '../Rate/Rate';
import starIcon from '../../assets/icon-star.svg';
import './Vote.scss';

function Vote({ onVote, maxRate }) {
  const [rate, setRate] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onVote(rate);
  };

  const handleRate = (selectedRate) => {
    setRate(selectedRate);
  };

  return (
    <section className="vote">
      <form action="" className="vote__form" onSubmit={handleSubmit}>
        <div className="vote__icon">
          <img className="vote__icon--img" src={starIcon} alt="Rate Icon" />
        </div>
        <h1 className="vote__title">How did we do?</h1>
        <p className="vote__desc">
          Please let us know how we did with your support request.
          All feedback is appreciated to help us improve our offering!
        </p>
        <Rate maxRate={maxRate} onRate={handleRate} />
        <button
          className="vote__submit--button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Vote;
