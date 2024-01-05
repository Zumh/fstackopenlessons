
// file imports the useState function
import { useState } from "react";

// Update of the state is asynchronous
const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
  
    const [total, setTotal] = useState(0)
  
    // satate change asynchronously which mean left state is not update immediately.
    // we end up with old value + new value which is wrong total that we render
    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      const updatedLeft = left + 1
      setLeft(updatedLeft)
  
      setTotal(updatedLeft + right)
    }
  
    // satate change asynchronously which mean right state is not update immediately.
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
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(' ')}</p>
  
        <p>total {total}</p>
      </div>
    )
  }
export default App;