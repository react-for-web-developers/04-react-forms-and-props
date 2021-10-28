import { useState } from "react";

function Score({ currentPlayer, hasOwnName }) {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div>
      <p>{hasOwnName ? `${currentPlayer}` : `Player ${currentPlayer}`}</p>
      <p>{counter}</p>
      <div className="button-container">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}

export default Score;
