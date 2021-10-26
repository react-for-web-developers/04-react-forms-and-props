import bookImg from '../assets/book-list.svg';

function Header() {
  return (
    <header className="header">
      <img src={bookImg} alt="Books" />
      <h1>List of Books to read</h1>
    </header>
  )
}

export default Header;
