import React, { Reducer } from 'react'
import { useReducer } from 'react'

type Props = {}

const initialState = 0

const reducer = (state: number, action: string) => {
    switch (action) {
        case "INC": return state + 1
        case "DEC": return state - 1
        case "RESET": return initialState
        default: return state
    }

}

const UseReducer = (props: Props) => {
    console.log('rerender');
    const [count, dispatch] = useReducer<Reducer<number, any>>(reducer, initialState)
    return (
        <div>
            <button onClick={() => dispatch('INC')}>INC</button>
            {count}
        </div>
    )
}

export default UseReducer