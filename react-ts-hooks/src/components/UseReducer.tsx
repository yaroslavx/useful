import { ReducerWithoutAction, useReducer } from "react"

enum CountActionKind {
    INCREASE = 'inc',
    DECREASE = 'dec',
}

interface CountAction {
    type: CountActionKind;
}

function countReducer(state: CountState, action: CountAction): CountState {
    switch (action.type) {
        case CountActionKind.INCREASE:
            return { count: state.count += 1 }
        case CountActionKind.DECREASE:
            return { count: state.count -= 1 }
        default:
            return state
    }
}

interface CountState {
    count: number
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });

    const handleInc = () => {
        dispatch({ type: CountActionKind.INCREASE })
    }

    const handleDec = () => {
        dispatch({ type: CountActionKind.DECREASE })
    }

    return (
        <div>
            <div onClick={handleDec}>-</div>
            <div>{state.count}</div>
            <div onClick={handleInc}>+</div>
        </div>
    )
}

export default UseReducer