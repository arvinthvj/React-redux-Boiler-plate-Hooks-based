import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import { useDispatch, useSelector } from 'react-redux';
// import { toAddOrGetBalanceInBank } from './reduxThings/reduxIIndex';
import { bindActionCreators } from 'redux';
import { useState } from 'react';
import { actionCreators } from './reduxThings/actionIndex';

function App() {
  const [state, setState] =useState(0);
  const itemsToPass = [
    "Phone",
    "TV",
    "Earphones",
    "Laptops",
    "PC"
];

  const BankDataFromReduxStore = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  const {toAddOrGetBalanceInBank} = bindActionCreators(actionCreators, dispatch);
  const [selectedOption, setSelectedOption] = useState(null);

const investInBank=()=>{
  toAddOrGetBalanceInBank(parseInt(state))
}

  return (
    <div className="App">
      {BankDataFromReduxStore}
      Deposit in bank<input onChange={(e)=>{setState(e.target.value)}} ></input>
      <button onClick={investInBank}>Invest</button>
      <button>Withdraw</button>
    </div>
  );
}

export default App;
