import React, { useState } from 'react';

type Props = {};

type initialStateType = string[]

const initialState: initialStateType = [
    'Bruce',
    'Wayne'
]

const ArrayState = (props: Props) => {
    const [fullName, setFullName] = useState<initialStateType>(initialState)

    const changeName = () => {
        setFullName(prev => [...prev, 'hi'])
    }
    return <div>
        <button onClick={changeName}>Change Name</button>
        <ul>
            {fullName.map(name => <li key={name}>{name}</li>)}
        </ul>
    </div>;
};

export default ArrayState;
