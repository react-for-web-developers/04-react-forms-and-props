import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');

  const updateAddMovie = (e) => {
    setNewMovie(e.target.value);
  };

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);

  const formSubmitted = (e) => {
    e.preventDefault();
    addMovie({
      id: Date.now(),
      title: newMovie,
      is_done: false,
    });
    setNewMovie('');
  };

  const markAsDone = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          is_done: !movie.is_done
        };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id)); 
  }

  const markAllDone = () => {
    setMovies(movies.map((movie) => {
      if (!movie.is_done) {
        return {
          ...movie,
          is_done: true
        };
      }
      return movie;
    }));
  }

  const removeDoneMovies = () => {
    setMovies(movies.filter((movie) => !movie.is_done))
  }

  return (
    <div>
      <h1>🎥 Movie Todo App 🎥</h1>
      
      <form onSubmit={formSubmitted}>
        <label htmlFor="addMovie">Add a movie to watch later</label>
        <input onChange={updateAddMovie} id="addMovie" value={newMovie} />
        <button type="submit">Add Movie</button>
      </form>

      <button onClick={markAllDone}>Mark all done</button>
      <button onClick={removeDoneMovies}>Remove done</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className={movie.is_done ? 'done' : ''}>
            {movie.title}
            <button onClick={() => markAsDone(movie.id)}>Mark as done</button>
            <button onClick={() => removeMovie(movie.id)}>Remove movie</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
