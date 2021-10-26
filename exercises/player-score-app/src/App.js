import { useState } from 'react';

import Player from './components/Player';
import Scoreboard from './components/Scoreboard';

function App() {
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);
  const [savedGames, setSavedGames] = useState([]);

  const increase = player => {
    if (player === 'P1') {
      setScoreP1(scoreP1 + 1)
    } else {
      setScoreP2(scoreP2 + 1)
    }
  }

  const decrease = player => {
    if (player === 'P1') {
      if (scoreP1 > 0) setScoreP1(scoreP1 - 1)
    } else {
      if (scoreP2 > 0) setScoreP2(scoreP2 - 1)
    }
  }

  const saveGame = (scoreP1, scoreP2) => {
    if (scoreP1 === 0 && scoreP2 === 0) return

    let game = {
      game: "#" + (savedGames.length + 1),
      player1: scoreP1,
      player2: scoreP2
    }

    setSavedGames(savedGames => [...savedGames, game])
    setScoreP1(0)
    setScoreP2(0)
  }

  return (
    <div className="medium-container">

      <div className="flex-row">
        <Player label="Player 1" score={scoreP1} />
        <Player label="Player 2" score={scoreP2} />
      </div>
      <div className="flex-row">
        <div className="flex-large half">
          <button value="P1" onClick={e => increase(e.target.value)}>Increase Score</button>
          <span>  </span>
          <button className="accent-button" value="P1" onClick={e => decrease(e.target.value)}>Decrease Score</button>
        </div>
        <div className="flex-large half">
          <button value="P2" onClick={e => increase(e.target.value)}>Increase Score</button>
          <span>  </span>
          <button className="accent-button" value="P2" onClick={e => decrease(e.target.value)}>Decrease Score</button>
        </div>
      </div>
      <br /><br />
      <div className="small-container">
        <div className="flex-row">
          <div className="flex-large half">
            <button className="full-button" onClick={() => saveGame(scoreP1, scoreP2)}>Save Game</button>
          </div>
          <div className="flex-large half">
            <button className="full-button accent-button" onClick={() => setSavedGames([])}>Reset Game</button>
          </div>
        </div>
      </div>
      <div>
        <Scoreboard savedGames={savedGames} />
      </div>
    </div>
  );
}

export default App;
