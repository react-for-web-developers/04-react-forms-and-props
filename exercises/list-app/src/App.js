import { useState } from 'react';
import Header from './components/Header';
import BookInput from './components/BookInput';
import BookList from './components/BookList';


function App() {
  const [books, setBooks] = useState([]);

  const addNewBook = (newBook) => {
    setBooks([...books, newBook]);
  }

  const toggleDone = (id) => {
    setBooks(books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          is_done: !book.is_done,
        }
      }
      return book;
    }))
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  return (
    <div className="wrapper">
      <Header />
      <BookInput addNewBook={addNewBook} />
      <BookList
        books={books}
        toggleDone={toggleDone}
        removeBook={removeBook}
      />

    </div>
  );
}

export default App;
