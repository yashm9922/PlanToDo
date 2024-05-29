import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pending from './Pages/Pending'
import Addtask from './Pages/Addtask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' px-8 py-8'>
      <Addtask/>
      <br />
      <Pending/>

    </div>
    </>
  )
}

export default App
