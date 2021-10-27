import { useState } from 'react';
import Tasks from './Tasks';
import { v4 as uuidv4 } from 'uuid';

function Home() {

  const [taskToAdd, setTaskToAdd] = useState({})
  const [taskDescription, setTaskDescription] = useState('')

  const handleAddTask = e => {
    e.preventDefault()
    if(!taskDescription.length > 0) return;
    setTaskToAdd({ id: uuidv4(), description: taskDescription, done: false })
    setTaskDescription('')
  }

  return(
    <main>
      <h3>Tasks To Do</h3>
      <div>
      <form onSubmit={handleAddTask} >
        <input 
          type="text" 
          placeholder='Task' 
          onChange={e => setTaskDescription(e.target.value)}
          value={taskDescription}
        />
        <button type='submit'>Add</button>
      </form>
      </div>
      <Tasks taskToAdd={taskToAdd}/>
    </main>
  )
}

export default Home;