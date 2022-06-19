import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const formSubmitted = (event) => {
    event.preventDefault();
    // alert("Item Added Successfully");
    setItems([
      ...items,
      {
        id: Date.now(), //not good for the real world, usually provided by server
        title: newItem,
        is_done: false
      }
    ]);
    setNewItem("");
  };

  const updateItem = (event) => {
    setNewItem(event.target.value);
  };

  const toggleDone = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            is_done: !item.is_done
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => setItems(items.filter((item) => item.id !== id));

  const removeDone = () => setItems(items.filter((item) => !item.is_done));

  const markDone = () => {
    setItems(
      items.map((item) => {
        if (!item.is_done) {
          return {
            ...item,
            is_done: true
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <header className="App">
        <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>Food Inventory</h1>
      </header>
      <main className="App">
      <h1>Food Inventory</h1>
      <form onSubmit={formSubmitted}>
        <label htmlFor="newItem">
          New Item
          <input onChange={updateItem} id="newItem" value={newItem} />
          <button type="submit">Add Item</button>
        </label>
      </form>
      <button onClick={markDone}>Mark All Items</button>
      <button onClick={removeDone}>Remove Marked Items</button>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={item.is_done ? "done" : ""}>
            {item.title}
            <input
              className="input"
              type="checkbox"
              onClick={() => toggleDone(item.id)}
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <hr />
          </li>
        ))}
      </ul>
    </main>
    </>
  );
}

export default App;
