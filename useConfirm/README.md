# @hooks/use-tabs
React Hook to naviagte between different tabs.

## Installation

#### npm
`npm i @justhookit/use-tabs`

#### yarn
`yarn add @justhookit/use-tabs`

## Usage
```js
import React from "react";
import useConfirm from "@justhookit/use-confirm";

function App() {
	const deleteItem = () => {
		console.log("Deleting Item...");
	};
	
	const abort = () => {
		console.log("aborted");
	}

	const confirmDelete = useConfirm("Are you sure?", deleteItem, abort);
	
	return (
		<div className="App">
		<button onClick={confirmDelete}>Delete the item</button>
		</div>
	);
}
```

## Arguments
| Argument | Type    | Description              | Required |
|----------|---------|--------------------------|----------|
| idx      | Integer | The index of initial tab | yes      |
| content  | Array   | The list of tabs         | yes      |