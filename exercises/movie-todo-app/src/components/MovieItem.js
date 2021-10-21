function MovieItem({ movie, markAsDone, removeMovie }) {
  return (
    <li className={movie.is_done ? 'done' : ''}>
      {movie.title}
      <button onClick={() => markAsDone(movie.id)}>Mark as done</button>
      <button onClick={() => removeMovie(movie.id)}>Remove movie</button>
    </li>
  );
}

export default MovieItem;