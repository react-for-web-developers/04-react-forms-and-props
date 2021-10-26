function TodoItem({ book, toggleDone, removeBook }) {
  return (  
    <li key={book.id} className={book.is_done ? 'done' : ''}>
      <div className="col-15"></div>
      <div className="col-50">{book.title}</div>
      <div className="col-10">
        <button onClick={() => toggleDone(book.id)}>Read</button>
      </div>
      <div className="col-15">
        <button onClick={() => removeBook(book.id)}>Remove</button>
      </div>
      </li>
  )
}

export default TodoItem;
