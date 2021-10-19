import Player from './Player';

function Players({ players }) {
  return (
    <>
      <h3>THIS IS THE PLAYERS COMPONENT</h3>
      {players.map((player) => (
        <Player label={player} />
      ))}
    </>
  );
}

export default Players;
