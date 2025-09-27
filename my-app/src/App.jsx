
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, previous} from './counterSlice'
import { useState } from 'react'

function App() {

  const count =useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  const [input, setInput] = useState(0)
  return (
    <>
    <input type="number" 
    placeholder='typee.. number'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    <h1>{count}</h1>
          <button onClick={()=> dispatch(increment(Number(input)))}>+</button>
          <button onClick={()=> dispatch(decrement(Number(input)))}>-</button>

     <button onClick={()=> dispatch(previous(Number(input)))}>*</button>


    </>
  )
}

export default App
