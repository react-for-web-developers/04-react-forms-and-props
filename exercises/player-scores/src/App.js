import "./App.css";

import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      {
        //hasOnwName defines if the entire name of the player will be passed or if
        //only the number will. True = full name, False = only number
      }
      <Score hasOwnName={false} currentPlayer="1" currentScore="0" />
      <Score hasOwnName={true} currentPlayer="Sebastian" currentScore="0" />
    </div>
  );
}

export default App;
