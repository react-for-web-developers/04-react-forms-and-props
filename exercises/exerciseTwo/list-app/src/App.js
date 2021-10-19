// CORE
import { useState } from 'react'

// CSS
import './App.css';

// COMPONENTS
import NewMovieForm from './components/NewMovieForm'
import MovieList from './components/MovieList'

function App() {
  const [movies, setMovies] = useState([])

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  const toggleWatched = (id) => {
    setMovies(movies.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          is_watched: !movie.is_watched
        }
      }
      return movie
    }))
  }
  
  return (
    <div>
      <NewMovieForm addMovie={addMovie} />
      <MovieList movies={movies} toggleWatched={toggleWatched} removeMovie={removeMovie} />
    </div>
  )
}

export default App;
