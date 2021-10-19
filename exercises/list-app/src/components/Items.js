import React from "react";
import Item from "./Item";

const Items = ({ items, markDone, removeItem, unmark }) => {
	return (
		<div className="items">
			<ul className="list-inline">
				{items.map((item) => (
					<Item
						item={item}
						key={item.id}
						markDone={markDone}
						removeItem={removeItem}
						unmark={unmark}
					/>
				))}
			</ul>
		</div>
	);
};

export default Items;
