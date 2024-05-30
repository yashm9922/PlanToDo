import { useState } from 'react'
import './App.css'
import Pending from './Pages/Pending'
import Addtask from './Pages/Addtask'
import Inprogress from './Pages/Inprogress'
import Completed from './Pages/Completed'

function App() {
  const [tasks, setTasks] = useState(["walk the dog", "write a letter", "wash the car"])
  
  const handleAddTask = (newtask) => {
    setTasks([...tasks, newtask]);
  };


  return (
    <>

      <Addtask onAddtask={handleAddTask} />
      <br />
      <div className='lg:flex lg:w-full'>
        <div className='lg:flex'>
          <div className="lg:w-full sm:w-auto md:w-1/2">
            <Pending tasks={tasks} />
          </div>
          {/* <div className="w-full sm:w-auto md:w-1/2">
            <Inprogress />
          </div> */}
        </div>
        {/* <div className=" sm:w-auto md:w-full">
          <Completed />
        </div> */}
      </div>
    </>
  )
}

export default App
