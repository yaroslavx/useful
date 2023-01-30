import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useList } from 'effector-react'
import { $tasks, createTask } from './store.js'

function App() {
  const [task, setTask] = useState('')

  const tasks = useList($tasks, (task) => (
    <div>{task}</div>
  ))

  return (
    <div className="App">
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => createTask(task)}>Add task</button>
      {tasks}
    </div>
  )
}

export default App
