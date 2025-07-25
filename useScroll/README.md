# @hooks/use-scroll
React Hook to track the current (X,Y) coordiantes of scroll position.

## Installation

#### npm
`npm i @justhookit/use-scroll`

#### yarn
`yarn add @justhookit/use-scroll`

## Usage
```js
import React from "react";
import useScroll from "@justhookit/use-scroll";

function App() {
	const { x, y } = useScroll();

	return (
		<div className="App" style={{ height: "1000vh" }}>
			<h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
				Hello World
			</h1>
		</div>
	);
}
```

## Returns
| Return | Type    | Description                         |
|--------|---------|-------------------------------------|
| x      | number  | Horizontal scroll position (pixels) |
| y      | number  | Vertical scroll position (pixels)   |