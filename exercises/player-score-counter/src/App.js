import { useState } from 'react';
import Player from './components/Player';
import Scores from './components/Scores';

function App() {
  const [p1score, setP1score] = useState(0);
  const [p2score, setP2score] = useState(0);
  const [scores, setScores] = useState([])
  
  const increaseP1Score = () => setP1score(p1score + 1);
  
  const decreaseP1Score = () => {
    if (p1score > 0) {
      setP1score(p1score - 1);
    }
  }
  
  const increaseP2Score = () => setP2score(p2score + 1);
  
  const decreaseP2Score = () => {
    if (p2score > 0) {
      setP2score(p2score - 1);
    }
  }

  const saveScore = () => {
    setScores([...scores, {
      p1score,
      p2score
    }]);
    setP1score(0);
    setP2score(0);
  }

  return (
    <div>
      <h1>The Player Counter!</h1>

      <section className="players">
        <Player label="😼" score={p1score} increase={increaseP1Score} decrease={decreaseP1Score} />

        <div>
          <p>.VS</p>
        </div>

        <Player label="👻" score={p2score} increase={increaseP2Score} decrease={decreaseP2Score} />
      </section>

      <div className="score-btn">
        <button className="btn" onClick={saveScore}>Save Game</button>
      </div>

      <Scores scores={scores} label1="😼" label2="👻" />
    </div>
  );
}

export default App;
