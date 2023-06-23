import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators ,State} from './store';

// import { State } from './store/reducers';


function App() {
  const dispatch = useDispatch();
  const { depositeMoney, withdraeMoney, bankruptMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state : State) =>state.bank)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=>depositeMoney(1000)}>Deposite</button>
      <button onClick={()=>withdraeMoney(500)}>Withdrow</button>
      <button onClick={()=>bankruptMoney()}>Bankruot</button>
    </div>
  );
}

export default App;
