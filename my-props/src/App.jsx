import Props from './props'

function App() {
 // const [count, setCount] = useState(0)

  return (
   <div>
      <h1>
        <Props text = "hello props"/>
        {/* <Props text = {{name: 'komala'}}/> */}
      </h1>
   </div>
  )
}

export default App