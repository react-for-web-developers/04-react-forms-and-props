import React, { useState } from "react";

const InputForm = ({ addItem }) => {
	const [input, setInput] = useState("");

	const formSubmitted = (e) => {
		e.preventDefault();

		if (input !== undefined) {
			addItem({
				id: Date.now(),
				title: input,
				is_done: false
			});

			setInput("");
		}
	};

	const updateItem = (e) => {
		setInput(e.target.value);
	};

	return (
		<div className="input__form">
			<form onSubmit={formSubmitted}>
				<input
					type="text"
					placeholder="Enter item..."
					value={input}
					onChange={updateItem}
				/>
			</form>
		</div>
	);
};

export default InputForm;
