import { useState } from 'react'

export default function Player({ label }) {

  const [score, setScore] = useState(0);

  function handleScoreUp() {
    setScore(score + 1);
  }
  function handleScoreDown() {
    if (score > 0) {
      setScore(score - 1)
    }
  }

  return (
    <div className="player-wrapper">
      <div className="score">
        {score}
      </div>
      <div className="player-tag">{label}</div>
      <div className="btn-group">
        <button className="btn" onClick={handleScoreDown}>-</button>
        <button className="btn" onClick={handleScoreUp}>+</button>
      </div>
    </div>
  )
}
