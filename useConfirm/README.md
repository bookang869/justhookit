# @justhookit/use-confirm
React Hook to ask the user for confirmation before executing a function.

## Installation

#### npm
`npm i @justhookit/use-confirm`

#### yarn
`yarn add @justhookit/use-confirm`

## Usage
```js
import React from "react";
import useConfirm from "@justhookit/use-confirm";

function App() {
	const execute = () => {
		console.log("Deleting Item...");
	};
	
	const abort = () => {
		console.log("aborted");
	}

	const confirmExecution = useConfirm("Are you sure?", execute, abort);
	
	return (
		<div className="App">
			<button onClick={confirmExecution}>Execute the function</button>
		</div>
	);
}
```

## Arguments
| Argument  | Type     | Description            					       | Required |
|-----------|----------|------------------------------------------------|----------|
| mesage    | String   | The message to show in the confirmation dialog | yes      |
| onConfirm | Function | Function to execute if user confirm            | yes      |
| onCancel  | Function | Function to execute if user cancels            | yes      |

## Returns
| Return 		| Type     | Description                                  |
|---------------|----------|----------------------------------------------|
| confirmAction | Function | Function to trigger the confirmation process |