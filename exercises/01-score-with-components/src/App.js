import './App.css';
import Player from './Components/Player';



function App() {

  return (
    <div className="App">
      <div className="scoreboard">
        <h1>SCORE</h1>
        <div className="scoreboard-wrapper">
          <Player label="Player 1" />
          <Player label="Player 2" />
        </div>
      </div>
    </div>
  );
}

export default App;
