import React from "react";

const Item = ({ id, item, removeItem, markDone, unmark }) => {
	return (
		<div className="item-container">
			<li key={id} className={item.is_done ? "done" : "item"}>
				<div>{item.title}</div>
				<div>
					<button className="btn btn-done" onClick={() => markDone(item.id)}>
						Mark Done
					</button>
					<button className="btn btn-unmark" onClick={() => unmark(item.id)}>
						Unmark
					</button>
					<button
						className="btn btn-remove"
						onClick={() => removeItem(item.id)}
					>
						Remove
					</button>
				</div>
			</li>
		</div>
	);
};

export default Item;
