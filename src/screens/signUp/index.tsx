import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "./action";

const App = () => {
  const count = useSelector((state:any) => state.counterReducer);

  const dispatch = useDispatch();  

  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>      
    </>
  );
};

export default App;
