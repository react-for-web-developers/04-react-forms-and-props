import React from "react";

const FinalScores = ({ finalScores }) => {
	return (
		<div className="result">
			{finalScores &&
				finalScores.map((score, index) => (
					<div className="scores" key={index}>
						<h3 className="scores__player">Player 1: {score.player1Score}</h3>
						<h3 className="scores__player">Player 2: {score.player2Score}</h3>
					</div>
				))}
		</div>
	);
};

export default FinalScores;
