
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

  // we can pass state to child components
  // especially counter is a state that we can pass from Display component
const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const increaseByOne = () => setCounter(counter + 1)
  
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)
  
    return (
      <div>
        <Display counter={counter}/>
  
        <Button
          onClick={increaseByOne}
          text='plus'
        />
        <Button
          onClick={setToZero}
          text='zero'
        />     
        <Button
          onClick={decreaseByOne}
          text='minus'
        />           
      </div>
    )
}

export default App; 

