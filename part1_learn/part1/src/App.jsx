
// file imports the useState function
import { useState } from "react";

// Conditional rendering
const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  const Button = ({clickHandler, text}) => {
    return (
        <button onClick={clickHandler}>{text}</button>
    )
  }
  
  const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    debugger
     // state change asynchronously which mean left state is not update immediately.
    // we end up with old value + new value which is wrong total that we render
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
    
        setTotal(updatedLeft + right)
      }
    
      // state change asynchronously which mean right state is not update immediately.
      // we end up with old value + new value which is wrong total that we render
      const handleRightClick = () => {
        setAll(allClicks.concat('R'))
  
        const updatedRight = right + 1
        setRight(updatedRight)
    
        setTotal(left + updatedRight)
      }
    return (
      <div>
        {left}
        <Button clickHandler={handleLeftClick} text='left' />
        <Button clickHandler={handleRightClick} text='right' />
        {right}
  
        <History allClicks={allClicks} />
      </div>
    )
  }
export default App;