
function Player({ label, score }) {
  return (
    <div className="flex-large">
      <h2>{label}: {score}</h2>
    </div>
  )
}

export default Player;
