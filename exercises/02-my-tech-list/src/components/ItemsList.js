import { useState } from 'react';

import "./ItemsList.css"


export default function ItemsList({ items, addItem }) {
  const [newItem, setNewItem] = useState('');

  function updateNewItem(event) {
    setNewItem(event.target.value);
  }

  const formSubmitted = (event) => {
    event.preventDefault();
    addItem(newItem);
    setNewItem('');
  };

  return (
    <>
      <div className="list-wrapper">
        <div className="title">
          <h2>Want to Learn</h2>
        </div>
        <ul>
          {items.map(item => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
      <form onSubmit={formSubmitted}>
        <input type="text" onChange={updateNewItem} placeholder="Select a Technology" />
        <button type="submit">Add</button>
      </form>
    </>
  )
}
