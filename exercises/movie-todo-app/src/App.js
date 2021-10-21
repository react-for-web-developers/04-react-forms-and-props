import { useState } from 'react';
import ExtraButtons from './components/ExtraButtons';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  
  const addMovie = (newMovie) => setMovies([...movies, newMovie]);

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
      
      <MovieForm addMovie={addMovie} />
      <ExtraButtons 
        markAllDone={markAllDone}
        removeDoneMovies={removeDoneMovies}
      />
      <MovieList 
        movies={movies}
        markAsDone={markAsDone}
        removeMovie={removeMovie}
      />
    </div>
  );
}

export default App;
