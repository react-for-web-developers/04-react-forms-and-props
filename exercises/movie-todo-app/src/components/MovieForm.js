import { useState } from 'react';

function MovieForm({ addMovie }) {
  const [newMovie, setNewMovie] = useState('');

  const updateAddMovie = (e) => {
    setNewMovie(e.target.value);
  };

  const formSubmitted = (e) => {
    e.preventDefault();
    addMovie({
      id: Date.now(),
      title: newMovie,
      is_done: false,
    });
    setNewMovie('');
  };
  
  return (
    <form onSubmit={formSubmitted}>
      <label htmlFor="addMovie">Add a movie to watch later</label>
      <input onChange={updateAddMovie} id="addMovie" value={newMovie} />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;