import { useState, useEffect } from 'react';
import Task from './Task'

function Tasks({ taskToAdd }) {
  const [tasks, setTasks] = useState([])

  const handleTaskDelete = (taskId) => {
    setTasks(() => tasks.filter(task => task.id !== taskId))
  }

  const handleTaskDone = (taskId) => {
    setTasks(prevState => {
      let indexToUpdate = prevState.findIndex(task => task.id === taskId)
      let tasks = [...prevState];
      let taskToUpdate = {...tasks[indexToUpdate]}
      taskToUpdate.done = !taskToUpdate.done
      tasks[indexToUpdate] = taskToUpdate;
      return tasks
    })
  }

  useEffect(() => {
    if(Object.keys(taskToAdd).length > 0) {
      setTasks(prevState => ([...prevState, taskToAdd]))
    }
  }, [taskToAdd])

  return(
    <section>
      {
        tasks && tasks.length > 0
        ? tasks.map(task => (
              <Task 
                key={task?.id} 
                task={task}
                handleDelete={handleTaskDelete}
                handleMarkAsDone={handleTaskDone}
              />
            ))
        : <p>You don't have any task</p>
      }
    </section>
  )
}

export default Tasks;