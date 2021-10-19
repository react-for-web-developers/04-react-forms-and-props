import { useState } from "react";
import "./App.css";

import Player from "./components/Player";
import FinalScores from "./components/FinalScores";

const App = () => {
	const [player1Score, setPlayer1Score] = useState(0);

	const [player2Score, setPlayer2Score] = useState(0);

	const [finalScores, setFinalScores] = useState([]);

	// player1 increment score
	const increasePlayer1Score = () => {
		setPlayer1Score(player1Score + 1);
	};
	// plauer2 decrement score
	const decreasePlayer1Score = () => {
		if (player1Score <= 0) return;
		setPlayer1Score(player1Score - 1);
	};

	// player2 increment score
	const increasePlayer2Score = () => {
		setPlayer2Score(player2Score + 1);
	};

	// plauer2 decrement score
	const decreasePlayer2Score = () => {
		if (player2Score <= 0) return;
		setPlayer2Score(player2Score - 1);
	};

	// Final scores
	const saveFinalScore = () => {
		setFinalScores([...finalScores, { player1Score, player2Score }]);
		setPlayer1Score(0);
		setPlayer2Score(0);
	};

	return (
		<div>
			{/** Heading */}
			<div className="app">
				<h1>Score Counter</h1>
			</div>
			<div className="score__container">
				{/** Player 1 Scores */}
				<div className="player__score">
					<Player
						label="Player 1"
						playerScore={player1Score}
						setPlayerScore={setPlayer1Score}
						increasePlayerScore={increasePlayer1Score}
						decreasePlayerScore={decreasePlayer1Score}
					/>
				</div>

				{/** Player 2 Scores */}
				<div className="player__score">
					<Player
						label="Player 2"
						playerScore={player2Score}
						setPlayerScore={setPlayer2Score}
						increasePlayerScore={increasePlayer2Score}
						decreasePlayerScore={decreasePlayer2Score}
					/>
				</div>
			</div>
			{/** Save button */}
			<div className="final__score">
				<button className="btn" onClick={saveFinalScore}>
					Save Game
				</button>
			</div>
			{/** Final scores */}
			<FinalScores finalScores={finalScores} />
		</div>
	);
};

export default App;
