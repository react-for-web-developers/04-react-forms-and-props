function Item({
    item,
    toggleDone,
    removeItem,
}) {
    return (
        <li className={item.is_done ? 'done' : ''}>
            {item.title}
            {item.category}
            {item.expiration}
            <button onClick={() => toggleDone(item.id)}>Done</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
        </li>
    );
}

export default Item;