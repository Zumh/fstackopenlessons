
// file imports the useState function
import { useState } from "react";

const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  const App = () => {
    // useSstate hook create aopplication state, init counter to 0
    const [counter, setCounter] = useState(0)
  
    console.log('rendering with counter value', counter)
  
    const increaseByOne = () => {
  
      console.log('increasing, value before', counter)
      setCounter(counter + 1)
    }
  
    const decreaseByOne = () => { 
  
      console.log('decreasing, value before', counter)
      setCounter(counter - 1)
    }
  
    const setToZero = () => {
  
      console.log('resetting to zero, value before', counter)
      setCounter(0)
  
    // Display component is render intialy with value of zero
    // onClick event trigger event handler that sets counter to 0 in the state
    // which trigger re-rendering of App component again with value of updated number.
    // Then button component recieve another event handlers to change the state of the counter.
    return (
      <div>
        <Display counter={counter} />
        <Button onClick={increaseByOne} text="plus" />
        <Button onClick={setToZero} text="zero" />
        <Button onClick={decreaseByOne} text="minus" />
      </div>
    )
  } 

export default App; 

