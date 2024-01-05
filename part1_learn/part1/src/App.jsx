
// file imports the useState function
import { useState } from "react";

/*
// complex state
const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
  
    return (
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    )
  }*/

  // using object state
  /*
  const App = () => {
    const [clicks, setClicks] = useState({
      left: 0, right: 0
    })
  
    const handleLeftClick = () => {
      const newClicks = { 
        left: clicks.left + 1, 
        right: clicks.right 
      }
      setClicks(newClicks)
    }
  
    const handleRightClick = () => {
      const newClicks = { 
        left: clicks.left, 
        right: clicks.right + 1 
      }
      setClicks(newClicks)
    }
  
    return (
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    )
  }
*/
  // simplifying App component
  const App = () => {
    const [clicks, setClicks] = useState({
      left: 0, right: 0
    })
    // we use object spread for simplifying and maintaining state
    const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
  
    const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })
    // don't update state directly like this 
    // Storing all of the state in a single state object is a bad choice for this particular application
    // result in complex application state
    /* const handleLeftClick = () => {
    clicks.left++
    setClicks(clicks)
    }*/

    return (
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    )
  }
export default App;