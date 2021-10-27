import { useState } from "react";

function Player({ label }) {
  const [score, setScore] = useState(0);

  return (
    <div className='player'>
      <h3>{label}</h3>
      <h5>Score: {score}</h5>
      <div>
        <button onClick={() => setScore(score - 1)}>
          Decrease
        </button>
        <button onClick={() => setScore(score + 1)}>
          Increase
        </button>
      </div>
    </div>
  )
}

export default Player;