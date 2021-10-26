import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function BookInput({ addNewBook }) {
  const [newBook, setNewBook] = useState('');

  const handleChange = (event) => {
    setNewBook(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook === '') return;
    
    addNewBook({
      id: uuid(),
      title: newBook,
      is_done: false,
    });

    setNewBook('');
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="New Book" onChange={handleChange} value={newBook} />
        <button className="accent-button full-button">Add new book</button>
        

      </form>
    </div>
  )
}

export default BookInput;
