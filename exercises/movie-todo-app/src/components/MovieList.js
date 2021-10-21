import MovieItem from "./MovieItem";

function MovieList({ movies, markAsDone, removeMovie }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem 
          key={movie.id}
          movie={movie}
          markAsDone={markAsDone}
          removeMovie={removeMovie}
        />
      ))}
    </ul>
  );
}

export default MovieList;