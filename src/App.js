import { useState } from "react"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}


function Counter() {
const [count,setCount] = useState(0);
const [step,setStep] = useState(1)
const date = new Date("may 15 2027")
date.setDate(date.getDate() + count)

  return <div>
   <div>
  <button onClick={()=>setStep(d=> d -1)}>-</button>
  <span>step: {step}</span>
  <button onClick={()=>setStep(d=> d+1)}>+</button>
  </div>
   <div>
  <button onClick={()=>setCount(d=> d- step)}>-</button>
  <span>Count: {count}</span>
  <button onClick={()=>setCount(d=> d+ step)}>+</button>
  </div>
  <p>
  <span>{count === 0 ? "Today is " : count > 0 ? `${count} day from today is ` : `${Math.abs(count)} dayes ago was `}</span>
  <span>{date.toDateString()}</span>
  </p>
  </div>
 
}
  
