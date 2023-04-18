import React, { useState } from 'react'
import Card from "./Components/Card/index"


function App() {
 
  const [number1,setNumber1]=useState(0);
  const [number2,setNumber2]=useState(0)
  const [result,setResult]=useState(0)

  return (
   
    <div className="App">
      <Card result={result} setResult={setResult} number2={number2} setNumber2={setNumber2} number1={number1} setNumber1={setNumber1}/>
    </div>
  )
}

export default App
