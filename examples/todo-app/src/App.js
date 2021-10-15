import { useState } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleDone = (id) => {
    // A copy of the todos array
    // const todosCopy = [...todos];
    // const todoIndex = todosCopy.findIndex(todo => todo.id === id);
    // const todoToToggle = todosCopy[todoIndex];
    // todosCopy[todoIndex] = {
    //   ...todoToToggle,
    //   is_done: !todoToToggle.is_done,
    // };
    // setTodos(todosCopy);
    // Update the is_done property on the new copy
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // create a copy with the is_done property updated
        return {
          ...todo,
          is_done: !todo.is_done,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    // Create the copy
    // Remove/splice the element with the id
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeDoneTodos = () => {
    setTodos(todos.filter((todo) => !todo.is_done));
  };

  const markAllDone = () => {
    // create a copy of the todos array
    // create a copy of every todo, and set is_done to true...
    // setTodos(todos.map((todo) => ({ ...todo, is_done: true })));
    // setTodos(todos.map((todo) => {
    //   // todo.is_done = true; // don't just modify! create a copy first
    //   return {
    //     ...todo,
    //     is_done: true,
    //   };
    // }));
    setTodos(todos.map((todo) => {
      if (!todo.is_done) {
        return {
          ...todo,
          is_done: true,
        };
      }
      return todo;
    }));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <button onClick={markAllDone}>Mark All Done</button>
      <button onClick={removeDoneTodos}>Remove Done</button>
      <TodoList
        todos={todos}
        toggleDone={toggleDone}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
