import ListItem from "./ListItem";

function ListView({ list, move, textButton, removeTodo }) {
  return (
    <ul className="todo-list">
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            todo={item}
            move={move}
            textButton={textButton}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
}

export default ListView;
