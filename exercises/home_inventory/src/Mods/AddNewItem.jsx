import { useState } from "react";

function AddNewItem({ addItem }) {
    const [newItem, newCategory, newExpiration, setNewItem] = useState([]);

    const updateNewItem = event => setNewItem(event.target.value);

    function itemAdded(event) {
        event.preventDefault();
        addItem({
            id: Date.now(),
            title: newItem,
            category: newCategory,
            expiration: newExpiration,
            is_done: false
        });
        setNewItem([]);
    }

    return (
        <form onSubmit={itemAdded}>
            <label htmlFor="newItem">New Item</label>
            <input onChange={updateNewItem} id="newItem" value={newItem} />
            
            <label htmlFor="newCategory">Choose a category:</label>
            <select id="newCategory" name="category" value={newCategory} >
                <option value="canned">Canned Good</option>
                <option value="cereal">Cereal</option>
                <option value="snack">Snack</option>
                <option value="dairy">Dairy-ish</option>
                <option value="eggs">Eggs</option>
                <option value="produce">Produce</option>
                <option value="meat">Meat</option>
                <option value="other">Other</option>
            </select>

            <label htmlFor="newExpiration">Expiration Date</label>
            <input id="newExpiration" value={newExpiration} type="date" />

            <button type="submit">Add Item</button>
        </form>
    );
}

export default AddNewItem;