import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(0)
  // let Counter = 15
  const addValue = ()=>{
    console.log("clicked",Counter);
    // Counter = Counter + 1
    if (Counter <= 19) {
      setCounter(Counter + 1)
    } else {
      throw console.error("Limit Exceeds");
    }
  }

  const removeValue = () =>{
    if (Counter >= 1) {
      setCounter(Counter - 1)
    } else {
    throw console.error("Negative Numbers not allowed");
    }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value: {Counter}</h2>

     <button onClick={addValue}>Add Value {Counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value {Counter}</button>
     <p>footer: {Counter}</p>
    </>
  )
}

export default App
