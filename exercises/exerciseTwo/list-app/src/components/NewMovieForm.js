import { useState } from 'react'

function NewMovieForm({ addMovie }) {
  const [newMovie, setNewMovie] = useState('')

  const updateNewMovie = (event) => {
    setNewMovie(event.target.value)
  }

  const formSubmitted = (event) => {
    event.preventDefault()
    addMovie({
      id: Date.now(),
      title: newMovie,
      is_watched: false
    })
    setNewMovie('')
  }

  return (
    <form onSubmit={formSubmitted}>
      <label htmlFor="newMovie">New Movie: </label>
      <input onChange={updateNewMovie} id="newMovie" value={newMovie} />&nbsp;
      <button>Add Movie</button>
    </form>
  )
}

export default NewMovieForm