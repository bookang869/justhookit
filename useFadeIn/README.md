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
import useFadeIn from "@justhookit/use-fade-in";

function App() {
	const fadeInH1 = useFadeIn(1, 2);
	const fadeInP = useFadeIn(5, 1);

	return (
		<div className="App">
			<h1 {...fadeInH1}>Hello</h1>
			<p {...fadeInP}>lalalala</p>
		</div>
	);
}
```

## Arguments
| Argument | Type    | Description              | Required |
|----------|---------|--------------------------|----------|
| idx      | Integer | The index of initial tab | yes      |
| content  | Array   | The list of tabs         | yes      |