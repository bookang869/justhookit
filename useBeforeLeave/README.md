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
import useBeforeLeave from "@justhookit/use-before-leave";

function App() {
	const askNotToLeave = () => {
		console.log("Please don't leave...");
	};

	useBeforeLeave(askNotToLeave);

	return (
		<div className="App">
			<h1>Hello</h1>
		</div>
	);
}
```

## Arguments
| Argument | Type    | Description              | Required |
|----------|---------|--------------------------|----------|
| idx      | Integer | The index of initial tab | yes      |
| content  | Array   | The list of tabs         | yes      |