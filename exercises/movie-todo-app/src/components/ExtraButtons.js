function ExtraButtons({ markAllDone, removeDoneMovies }) {
  return (
    <div className='extra-btns'>
      <button onClick={markAllDone}>Mark all done</button>
      <button onClick={removeDoneMovies}>Remove done</button>
    </div>
  );
}

export default ExtraButtons;