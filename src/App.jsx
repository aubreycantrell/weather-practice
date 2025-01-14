import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Weather Patterns</h1>
      <div><p> fun facts about weather</p>
      <ul>
        <li>snow</li>
        <li>rain</li>
        <li>sunny</li>
        <li>cloudy</li>
      </ul>
      
      </div>

    </>
  )
}

export default App
