import MovieItem from './MovieItem'
function MovieList ({movies, toggleWatched,  removeMovie}) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} toggleWatched={toggleWatched} removeMovie={removeMovie} />
      ))}
    </ul>
  )
}

export default MovieList