function ListItem({ todo, move, textButton, removeTodo }) {
  const runMove = () => move(todo);
  const runDelete = () => removeTodo(todo);

  return (
    <li className="todo">
      <p>{todo.text}</p>
      <div>
        <button onClick={runMove}>{textButton}</button>
        <button onClick={runDelete}>💀</button>
      </div>
    </li>
  );
}

export default ListItem;
