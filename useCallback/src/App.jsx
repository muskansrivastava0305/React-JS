import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { preview } from 'vite'

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = () => {
    setTodo((prev) => [ ...prev, `new Entry`]);
  };

  return (
    <>
     <Todo.map todo={todo} addTodo={addTodo} />
     <br/>
     <div>
      count: {count}
      <button onClick={increment}>+</button>
     </div>
    </>
  )
}

export default Callbackhook
