import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "./redux/counter";
import { fetchTodos } from './redux/dataFetching';




function App() {
  const { count } = useSelector((state) => state.counter);
  const { data } = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
     {/* hi  */}
     {count}
     {data.map(e=>(
       <div>{e.category}</div>
     ))}
     {/* <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button> */}
      <button onClick={() => dispatch(incrementByAmount(33))}> Increment by amount</button>
      <input  />
      <button onClick={() => dispatch(decrementByAmount(33))}>Decrement by amount</button>
      
      <button onClick={() => dispatch(fetchTodos())}>Data</button>

    </div>
  );
}

export default App;
