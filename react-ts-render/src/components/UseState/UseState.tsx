import React, { useState, FC } from "react";

const UseState: FC = () => {
  const [state, setState] = useState<boolean>(true);
  console.log('rerender');

  return (
    <div>
      <div>{state.toString()}</div>
      <button onClick={() => setState(true)}>
        set true
      </button>
      <button onClick={() => setState(false)}>
        set false
      </button>
      <button onClick={() => setState(prevState => !prevState)}>
        set !state
      </button>
    </div>
  );
};
export default UseState