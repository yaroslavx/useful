import React from 'react';
import { Voting } from './Voting';

const pair = ['Trainspotting', '28 Days Later'];

export const App = () => {
  return (
    <div>
      <Voting pair={pair} />
    </div>
  );
};
