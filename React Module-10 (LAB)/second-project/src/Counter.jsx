// Create a functional component with a counter using the useState() hook. Include
// buttons to increment and decrement the counter
import React from 'react'
import { useState } from 'react'
import './app.css'

let Counter = () => {
  let [counter, setCounter] = useState(0)
  let add = () => setCounter(counter += 1)
  let minus = () => counter > 0 ? setCounter(counter -= 1) : null
  const reset = () => setCounter(0)

  return (

    <div>
      
      <h2>Counter:{counter}</h2>
      <div className='btn'>
      <button  className='sty' onClick={add}>add {counter}</button>
      <button className='sty' onClick={minus}>minuss {counter}</button>
      <button className='sty' onClick={reset}>Reset {counter}</button>
      </div>
    </div>
  );
}
export default Counter;