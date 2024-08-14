import { useState } from 'react'
import './Style.css'


function App() {
  const [count, setCount] = useState(0)
  
  function increment(){
    setCount(count + 1)
  }
  function decrement(){
    if (count >0){
      setCount(count-1)

    }else {
      setCount(count)
    }
    
  }
  function reset(){
    setCount(0)
  }

  return (
    <>
      <div className='container'>
          <div className='counterValue'>
            <div className='value'>{count}</div>
            
               <button onClick={increment}>Increment</button>
               <button onClick={decrement}>Decrement</button>
               <button onClick={reset}>Reset</button>
          </div>
          
      </div>
    </>
  )
}

export default App
