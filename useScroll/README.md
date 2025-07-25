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
import useScroll from "@justhookit/use-scroll";

function App() {
	const { x, y } = useScroll();

	return (
		<div className="App" style={{ height: "1000vh" }}>
			<h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
				Hello
			</h1>
		</div>
	);
}
```

## Arguments
| Argument | Type    | Description              | Required |
|----------|---------|--------------------------|----------|
| idx      | Integer | The index of initial tab | yes      |
| content  | Array   | The list of tabs         | yes      |