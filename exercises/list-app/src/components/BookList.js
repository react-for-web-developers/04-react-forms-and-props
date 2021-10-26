import BookItem from "./BookItem";

function BookList({ books, toggleDone, removeBook }) {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          toggleDone={toggleDone}
          removeBook={removeBook} />
      ))}
    </ul>
  )
}

export default BookList;
