import { useState ,  useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 1 . it create a mutaible variable which will not re-render the coponents..
// 2 . used to access a dom element.
const UseRef = () => {
  const [myData , setMyData] = useState(" ")
  //const [count , setCount] = useState(0);

  //const count = useRef(1);
 // console.log("count", count);

 const inputElem = useRef(" ")  

  // useEffect(() => {
  //     // setCount(count + 1);
  //     count.current = count.current + 1;
  // });

  const changeStyle = () =>{
    console.log("input", inputElem.current.style.backgroundColor = "black");
    
  }

  return (
      <>
      <input ref={inputElem } type="text" value={myData} onChange={(e) => setMyData(e.target.value)}/>

      {/* <p>The number of times render: {count.current}</p> */}
      <button onClick={changeStyle}>Submit</button>
      </>


  )
}

export default UseRef
