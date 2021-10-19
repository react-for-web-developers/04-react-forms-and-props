import { useState } from "react";
import InputForm from "./components/InputForm";
import Items from "./components/Items";

const App = () => {
	const [items, setItems] = useState([]);

	const addItem = (newItem) => {
		setItems([...items, newItem]);
	};

	const markDone = (id) => {
		setItems(
			items.map((item) => {
				if (item.id === id) {
					return {
						...item,
						is_done: true
					};
				}
				return item;
			})
		);
	};

	const unmark = (id) => {
		setItems(
			items.map((item) => {
				if (item.id === id) {
					return {
						...item,
						is_done: false
					};
				}
				return item;
			})
		);
	};

	const removeItem = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	return (
		<div className="App">
			<header>
				<h1>Grocery shopping list app</h1>
			</header>
			<InputForm addItem={addItem} />
			<Items
				items={items}
				markDone={markDone}
				removeItem={removeItem}
				unmark={unmark}
			/>
		</div>
	);
};

export default App;
