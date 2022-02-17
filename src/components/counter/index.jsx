import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/counter/counterAction";

Counter.propTypes = {};

function Counter(props) {
  const selector = useSelector((state) => state.count);
  const value = selector.counter;

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(actions.increment(value));
  };
  const handleDecrement = () => {
    dispatch(actions.decrement(value));
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>Value: {value}</h3>
      <div>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>DECREMENT</button>
      </div>
    </div>
  );
}

export default Counter;
