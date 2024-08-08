import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [page , setpage] = useState(15)
  //let page = 10;

  const addValue = () =>{
    // page = page + 1 ;
     console.log("value", page)
     page = page + 1
     setpage(page)
  }

  const removeValue = () => {
    setpage(page -1 )
  }

  return (
    <>
    <h1> hooks</h1>
    <h2>Learn Hooks: {page}</h2>
    <button onClick = {addValue}>Next</button>
    <br/>
    <button onClick={removeValue}>Previous</button>
    </>
  )
}

export default App
