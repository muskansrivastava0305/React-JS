import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  async function data() {
    await axios.get('https://api.github.com/users/muskansrivastava0305')
    .then(Response => Response.data)
    .then(data => setCount(data))
    //.catch(err => console.log(err));
    console.log(data)
  }

  useEffect( () => {
    data();
  },[])

  return (
         <div>
          {count && (
            <>
        <h1 >{count.name}</h1>,
        <h2>{count.login}</h2>
        </>
      )}
         </div>
  )
}


export default App
