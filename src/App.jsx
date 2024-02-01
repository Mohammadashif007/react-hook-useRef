// import { useRef, useState } from 'react'
import './App.css'
import Ref from './Ref/Ref'

function App() {
  // const myRef = useRef(null);
  // const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setCount(count+1);
  //   myRef.current++;
  //   console.log('ref:', myRef.current);
  // }

  return (
    <>
      {/* <h1>Count: {count}</h1>
      <button onClick={handleIncrement} style={{backgroundColor: "#0C2D57", color: "#fff"}}>Increment</button> */}
      <Ref></Ref>
    </>
  )
}

export default App
