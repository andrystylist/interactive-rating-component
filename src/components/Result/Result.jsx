import React from 'react';
import resultIcon from '../../assets/illustration-thank-you.svg';
import './Result.scss';

function Result({ rate, maxRate, onResetVote }) {
  return (
    <section className="result">
      <div className="result__icon">
        <img className="result__icon--img" src={resultIcon} alt="Rate Icon" />
      </div>
      <div className="result__final" onDoubleClick={onResetVote}>
        You selected
        {' '}
        {rate}
        {' '}
        out of
        {' '}
        {maxRate}
      </div>
      <h1 className="result__title">Thank you!</h1>
      <p className="result__desc">
        We appreciate you taking the time to give a rating.
        If you ever need more support, don&apos;t hesitate to get
        in touch!
      </p>
    </section>
  );
}

export default Result;
