import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);
  return (
    <main className="App">
      <h1>Two Player Showdown</h1>
      <img
        src="https://images.unsplash.com/photo-1551473985-274d7ed1356e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
        alt="Rhino showdown"
      />
      <section>
        <h2>Player 1</h2>
        <p>Score: {score}</p>
        <button onClick={() => setScore(score + 1)}>Increase</button>
        <button onClick={() => setScore(score - 1)}>Decrease</button>
      </section>
      <section>
        <h2>Player 2</h2>
        <p>Score: {score2}</p>
        <button onClick={() => setScore2(score2 + 1)}>Increase</button>
        <button onClick={() => setScore2(score2 - 1)}>Decrease</button>
      </section>
    </main>
  );
}
