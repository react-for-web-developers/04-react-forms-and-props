function Score({ label, score } ) {
  return (
    <div className="score">
      <span>Player {label}: {score}</span>
    </div>
  );
}

export default Score;