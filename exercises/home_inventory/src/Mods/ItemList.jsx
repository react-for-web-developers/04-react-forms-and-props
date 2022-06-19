import Item from "./Item";

function ItemList({ items, toggleDone, removeItem }) {
    return (
        <ul>
            {items.map((item, category, expiration) => (
                <Item
                    key={item.id}
                    item={item}
                    category={category}
                    expiration={expiration}
                    toggleDone={toggleDone}
                    removeItem={removeItem}
                />
            ))}
        </ul>
    );
}

export default ItemList;