import React from "react";

const Player = ({
	label,
	playerScore,
	increasePlayerScore,
	decreasePlayerScore,
	setPlayerScore
}) => {
	return (
		<div>
			<h2>
				{label}: {playerScore}
			</h2>
			<button className="btn btn-increment" onClick={increasePlayerScore}>
				Increase Score
			</button>
			<button className="btn btn-decrement" onClick={decreasePlayerScore}>
				Decrease Score
			</button>
		</div>
	);
};

export default Player;
