import React, { useState } from 'react';

type Props = {};

type initialStateType = {
  [key: string]: string
}

const initialState: initialStateType = {
  fname: 'Bruce',
  lname: 'Wayne'
}
const ObjectState = (props: Props) => {
  const [fullName, setFullName] = useState<initialStateType>(initialState)

  const changeName = () => {
    setFullName({ ...fullName, lname: 'Not Wayne' })
  }
  return <div>
    <button onClick={changeName}>Change Name</button>
    <ul>
      {Object.keys(fullName).map(name => <li key={name}>{fullName[`${name}`]}</li>)}
    </ul>
  </div>;
};

export default ObjectState;
