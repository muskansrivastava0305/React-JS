In React, there are two types of components: Functional Components and Class-Based Components. Both types of components are used to render UI elements, but they have different syntax, features, and use cases.

# Functional Components
Functional components are pure functions that take in props and return JSX elements. They are also known as Stateless Components or Presentational Components.

Here's an example of a functional component:

```
import React from 'react';

const HelloComponent = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}; 
```

## Key characteristics of functional components:

- They are functions that return JSX elements.
- They don't have their own state.
- They don't have lifecycle methods (e.g., componentDidMount).
- They are easier to write and maintain.
- They are optimized for performance by React.


# Class-Based Components
Class-based components are classes that extend the React.Component class. They are also known as Stateful Components or Container Components.

Here's an example of a class-based component:

```
import React, { Component } from 'react';

class HelloComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'John' };
  }

  render() {
    return <h1>Hello, {this.state.name}!</h1>;
  }
}

```

## Key characteristics of class-based components:

- They are classes that extend React.Component.
- They have their own state and lifecycle methods.
- They can manage their own state using this.state and this.setState.
- They can use lifecycle methods (e.g., componentDidMount) to perform actions at different stages of the component's life cycle.
- They are more complex and harder to maintain than functional components.
 When to use each.

## When to use each
Here are some guidelines on when to use each type of component:

### Use functional components:
- When you only need to render a simple UI element.
- When you don't need to manage state or lifecycle methods.
- When you want to optimize performance.
### Use class-based components:
- When you need to manage state or lifecycle methods.
- When you need to perform complex logic or calculations.
- When you need to integrate with other libraries or APIs.
 
 -In general, functional components are preferred for simple, presentational components, while class-based components are used for more complex, stateful components. However, with the introduction of React Hooks, functional components can now manage state and lifecycle methods as well, making them a more viable option for many use cases.

 ### --------------------------------------------------------------------------------------------------------------------------------

# Rerendering
In React, a component will automatically rerender whenever its state or props change. This is a key feature of React's virtual DOM (a lightweight in-memory representation of your application's UI).

When the state or props of a component change, React will:

1. Update the component's state or props.
2. Call the component's render() method to get the new virtual DOM.
3. Compare the new virtual DOM with the previous one.
4. Update the actual DOM with the differences.

Here's an example of a simple counter component that rerenders when the state changes:

``` import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
 ```
In this example, when the user clicks the "Increment" button, the count state is updated, and the component rerenders with the new count value.

# Conditional Rendering
Conditional rendering is a technique used to render different components or elements based on certain conditions. This is useful when you want to display different content depending on the state of your application.

In React, you can use the if statement or the ternary operator (?:) to conditionally render components.

Here's an example of conditional rendering using the if statement:

``` 
import React, { useState } from 'react';

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <div>Welcome back!</div>;
  } else {
    return <div>Please log in</div>;
  }
}
  ``` 
In this example, the Greeting component renders different content depending on the isLoggedIn state.

- Alternatively, you can use the ternary operator (?:) for a more concise syntax:

```  
import React, { useState } from 'react';

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <div>Welcome back!</div> : <div>Please log in</div>;
}
```
### -------------------------------------------------------------------------------------------------------

# Why Hooks?

Before hooks, functional components were limited in their capabilities. They couldn't have their own state or use lifecycle methods like componentDidMount. Hooks solve this problem by providing a way to use these features in functional components.

**1. useState:-**

useState is used to add state to functional components.

***Syntax:*** `const [state, setState] = useState(initialState)`

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

`In this example, count is the state variable, and setCount is the function to update it.`

**2. useEffect**
useEffect is used to handle side effects, such as making API calls or setting timers.

***Syntax:*** useEffect(effectFunction, dependencies)

### Exmaple:

```
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // empty dependency array means the effect runs only once

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

`In this example, the effect function fetches data from an API and updates the data state variable.`

**3. useCallback**

useCallback is used to memoize a function, so it's not recreated on every render.

***Syntax:*** const memoizedCallback = useCallback(callbackFunction, dependencies)

### Example:

```
import React, { useState, useCallback } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback(() => {
    fetch(`https://api.example.com/search?q=${query}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }, [query]); // dependency array ensures the function is recreated when query changes

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

```



