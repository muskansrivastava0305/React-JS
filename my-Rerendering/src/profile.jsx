//Conditional-Rendering

import { useState } from "react"

function Profile(){

    const [loggedIn ,setloggedIn] =useState(2)

    return (
        <div>
           { loggedIn==1?<h1>Conditional Rendering 1</h1>:loggedIn==2?<h1>Welcome Rendering 2</h1>:<h1>welcome rendering 3</h1>}
        </div>
    )    
}

export default Profile

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Counter