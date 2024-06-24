import { useContext } from 'react';
import { counterContext } from './context/Counter';
import Counter from './components/Counter';


const App = () => {
  
  const { count } = useContext(counterContext);
  console.log("Context", count);
 
  return (
    <>
     
      <div className="navbar">
      
        <h1>Interactive Counter App</h1>
      </div>
     
    <div className='App'>

      <h1>Count is {count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
 
    </div>
    </>
  );
};

export default App;
