import React, { useRef , useState} from 'react';

function Counter() {
  const countRef = useRef(0);
  const[count , setcount] = useState(0)

  const handleIncrement = () => {
    countRef.current++;
    console.log(`Count: ${countRef.current}`)
    setcount(count +1 )
  
  };

  return (
    <div>
      <p>Count: {countRef.current}</p>
      <button onClick = {handleIncrement}>Increment</button>
    </div>
  );
}


export default Counter


// import React, { useRef } from 'react';

// function InputField() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default InputField