import { useContext } from 'react';
import { counterContext } from './context/Counter';
import Counter from './components/Counter';

// 2nd
// import Item from "./components/Item";
// import Cart from "./components/Cart";
// import './App.css';
  //2nd

const App = () => {
  //2nd
  const { count } = useContext(counterContext);
  console.log("Context", count);
  //2nd
  return (
    <>
      {/* 2nd */}
      <div className="navbar">
        {/* <h1>Centralized E-Commerce Cart</h1> */}
        <h1>Interactive Counter App</h1>
      </div>
        {/* 2nd */}
    <div className='App'>

      <h1>Count is {count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
  {/* //2nd */}
      {/* <Item name="Rich Dad Poor Dad" price={10000}/>
      <Item name="Mobile" price={40000}/>
      <Item name="USB" price={3000}/>
      <Item name="MacBook Pro" price={9000}/>
      <Cart/> */}
      {/* 2nd */}
    </div>
    </>
  );
};

export default App;
