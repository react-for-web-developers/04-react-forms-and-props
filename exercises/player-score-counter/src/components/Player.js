import Buttons from "./Buttons";

function Player({ label, score, increase, decrease }) {
  return (
    <div className="player">
      <h3>Player</h3>
      <p className="icon">{label}</p>
      <span>Score: {score}</span>
      <Buttons increase={increase} decrease={decrease} />
    </div>
  );
}

export default Player;