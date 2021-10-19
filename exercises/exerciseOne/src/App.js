/** @format */

import { useState } from 'react';
import Players from './components/Players'
import './App.css';

export default function App() {
	const [playerOne, setPlayerOneScore] = useState(0);
	const [playerTwo, setPlayerTwoScore] = useState(0);
	const [scoreBoard, setScoreBoard] = useState([]);

  const [players] = useState([{
    name: 'Batman'
  }, {
    name: 'Joker'
  }]);

  const saveScore = () => {
    let winner = ''

    if (playerOne === playerTwo) { winner = 'draw' }
    if (playerOne > playerTwo) { winner = 'Player One'}
    if (playerOne < playerTwo) { winner = 'Player Two' }


    const newRecord = {
      playerOne: playerOne,
      playerTwo: playerTwo,
      winner: winner
    }
    setScoreBoard(prevState => [...prevState, newRecord])
  }

	const decrementPlayerOne = () => {
		if (playerOne <= 0) {
			setPlayerOneScore(0);
		} else {
			setPlayerOneScore(playerOne - 1);
		}
	};

	const incrementPlayerOne = () => {
		setPlayerOneScore(playerOne + 1);
	};

	const decrementPlayerTwo = () => {
		if (playerTwo <= 0) {
			setPlayerTwoScore(0);
		} else {
			setPlayerTwoScore(playerTwo - 1);
		}
	};

	const incrementPlayerTwo = () => {
		setPlayerTwoScore(playerTwo + 1);
	};

  //Styles

  const playerBoard = {
    marginLeft: '15px',
    marginTop: '15px'
  }

	return (
		<div style={ playerBoard }>
			<div>
				<h1> Player Status </h1>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						alignText: 'center',
						width: '50%',
						backgroundColor: '#4CC0AF',
					}}
				>
					<div>
						<h2> Player One Score</h2>
						<div
							style={{
								display: 'flex',
								fontSize: '2em',
								justifyContent: 'center',
							}}
						>
							{playerOne}
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-around',
								paddingTop: '25px',
								paddingBottom: '25px',
							}}
						>
							<button onClick={decrementPlayerOne}>Decrement</button>
							<button onClick={incrementPlayerOne}>Increment</button>
						</div>
					</div>
					<div>
						<h2> Player Two Score</h2>
						<div
							style={{
								display: 'flex',
								fontSize: '2em',
								justifyContent: 'center',
							}}
						>
							{playerTwo}
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-around',
								paddingTop: '25px',
								paddingBottom: '25px',
							}}
						>
							<button onClick={decrementPlayerTwo}>Decrement</button>
							<button onClick={incrementPlayerTwo}>Increment</button>
						</div>
					</div>
				</div>
        
        <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px'}}>
          <button style={{ width: '75px', height: '50px' }} onClick={ saveScore }>Save</button>
        </div>

				<div
					style={{ backgroundColor: '#30887B', width: '50%', color: 'white', paddingBottom: '15px' }}
				>
					<h2>Scoreboard</h2>
          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div>
              <h3>Player One</h3>
            </div>
            <div>
              <h3>Player Two</h3>
            </div>
            <div>
              <h3>Result</h3>
            </div>
          </div>

          <div>
            {scoreBoard.map((score) => {
              return (
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                  <div>{score.playerOne}</div>
                  <div>{score.playerTwo}</div>
                  <div>{score.winner}</div>
                </div>
              )
            })}
          </div>
				</div>
			</div>

      <div>
        <Players players={players} />
      </div>
		</div>
	);
}
