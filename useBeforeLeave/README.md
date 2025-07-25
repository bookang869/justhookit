# @hooks/use-before-leave
React Hook to execute a function when mouse leaves the top edge of the window

## Installation

#### npm
`npm i @justhookit/use-before-leave`

#### yarn
`yarn add @justhookit/use-before-leave`

## Usage
```js
import React from "react";
import useBeforeLeave from "@justhookit/use-before-leave";

function App() {
	const onLeave = () => {
		console.log("Please don't leave...");
	};

	useBeforeLeave(onLeave);

	return (
		<div className="App">
			<h1>Hello World</h1>
		</div>
	);
}
```

## Arguments
| Argument | Type     | Description            								 | Required |
|----------|----------|------------------------------------------------------|----------|
| onBefore | Function | Function to call when mouse leaves top of the window | yes      |