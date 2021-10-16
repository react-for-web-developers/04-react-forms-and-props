import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddNewItem from './Mods/AddNewItem';
import ItemList from './Mods/ItemList';

function App() {
const [items, setItems] = useState([]);

const addItem = (newItem, newCategory, newExpiration) => setItems([...items, newItem, newCategory, newExpiration]);

const toggleDone = id => {
  const updatedItems = items.map(item => {
    if(item.id === id) {
      return {
        ...item,
        is_done: !item.is_done
      };
    }
    return item;
  });
  setItems(updatedItems);
};

const removeItem = id => setItems(items.filter(item => item.id !== id));
const removeDone = () => setItems(items.filter(item => !item.is_done));

const markAll = () => {
  setItems(items.map(item => {
    if(!item.is_done) {
      return {
        ...item,
        is_done: true
      };
    }
    return item;
  }));
};


  return (
    <>
      <header className="App">
        <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>Food Inventory</h1>
      </header>
      <main>
        <AddNewItem addItem={addItem} />
        <button onClick={markAll}>Mark All</button>
        <button onClick={removeDone}>Remove Marked Items</button>
        <ItemList items={items} toggleDone={toggleDone} removeItem={removeItem} />
      </main>
    </>
  );
}

export default App;
