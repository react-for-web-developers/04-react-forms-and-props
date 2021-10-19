
import { useState } from 'react';
import ItemsList from './components/ItemsList'
import './App.css';




function App() {

  const [items, setItems] = useState(["React", "Express", "NodeJs"]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  }



  return (
    <div className="App">
      <h1>Technologies I...</h1>
      <ItemsList items={items} addItem={addItem} />

    </div>
  );
}

export default App;
