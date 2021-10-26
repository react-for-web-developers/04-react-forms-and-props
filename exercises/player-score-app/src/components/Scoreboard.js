
function Scoreboard({ savedGames }) {
  return (
    <table className="striped-table">
      <thead>
        <tr>
          <th>Game</th>
          <th>Player 1</th>
          <th>Player 2</th>
        </tr>
      </thead>
      <tbody>
        {savedGames.map((score, index) => {
          return (
            <tr key={index}>
              <td>{score.game}</td>
              <td>{score.player1}</td>
              <td>{score.player2}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Scoreboard;
