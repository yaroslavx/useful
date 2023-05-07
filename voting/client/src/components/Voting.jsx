import React from 'react';

export const Voting = ({ pair }) => {
  return (
    <div className='voting'>
      {pair.map((entry) => (
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      ))}
    </div>
  );
};
