import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import ListView from "./components/ListView";

function App() {
  const [notDone, setNotDone] = useState([]);
  const [done, setDone] = useState([]);

  const markDone = (currentTodo) => {
    setNotDone(notDone.filter((item) => item.id !== currentTodo.id));
    setDone([...done, currentTodo]);
  };

  const markNotDone = (currentTodo) => {
    setDone(done.filter((item) => item.id !== currentTodo.id));
    setNotDone([...notDone, currentTodo]);
  };

  const addTodo = (newItem) => {
    setNotDone([...notDone, newItem]);
  };

  const removeTodo = (todo) => {
    setNotDone(notDone.filter((item) => item.id !== todo.id));
    setDone(done.filter((item) => item.id !== todo.id));
  };

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <p>
        {" "}
        Mark To-Do's as done with ✅, mark them not done with ❎ or, remove them
        from the list with 💀
      </p>
      <div className="lists-container">
        <div>
          <span>Things to do</span>
          <ListView
            className="todo-list"
            list={notDone}
            move={markDone}
            removeTodo={removeTodo}
            textButton="✅"
          />
        </div>
        <div>
          <span>Things done!</span>
          <ListView
            className="todo-list"
            list={done}
            move={markNotDone}
            removeTodo={removeTodo}
            textButton="❎"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
