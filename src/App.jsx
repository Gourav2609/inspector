import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Package from './assets/New.jpg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={Package}></img>
      </div>
      <div className='text'>
        <h1>Here is the Package</h1>
      </div>
    </>
  )
}

export default App
