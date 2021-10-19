function MovieItem({
  movie,
  toggleWatched,
  removeMovie
}) {
  return (
    <li className={movie.is_watched ? 'watched':''}>
      {movie.title}&nbsp;
      <button onClick={() => toggleWatched(movie.id)}>Toggle Watched</button>&nbsp;
      <button onClick={() => removeMovie(movie.id)}>Remove Movie</button>
    </li>
  )
}

export default MovieItem