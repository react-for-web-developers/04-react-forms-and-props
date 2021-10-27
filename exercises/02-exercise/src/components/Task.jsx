function Task({ task, handleDelete, handleMarkAsDone }) {
  return(
    <>
    {task && 
      <div>
        <p style={{ textDecoration: `${task.done ? 'line-through' : 'none'}` }}>{task?.description}</p>
        <button onClick={() => handleMarkAsDone(task?.id)}>Mark as done</button>
        <button onClick={() => handleDelete(task?.id)}>Delete</button>
      </div>
    }
    </>
  )
}

export default Task;