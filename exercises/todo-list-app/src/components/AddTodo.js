import { useState } from "react";

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  const updateField = (event) => {
    setTodo(event.target.value);
  };

  const createTodo = (event) => {
    event.preventDefault();
    addTodo({
      id: Date.now(),
      text: todo,
    });
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <label htmlFor="newTodo">What do you need to do?</label>
        <input id="newTodo" onChange={updateField} value={todo}></input>
        <button>Add To-Do</button>
      </form>
    </div>
  );
}

export default AddTodo;
