# @hooks/use-fade-in
React Hook to apply a fade-in effect to any React element.

## Installation

#### npm
`npm i @justhookit/use-fade-in`

#### yarn
`yarn add @justhookit/use-fade-in`

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
| Argument | Type   | Description              					     | Required |
|----------|--------|------------------------------------------------|----------|
| duration | Number | Duration of the fade-in animation (in seconds) | no       |
| delay    | Number | Delay before animation starts (in seconds)     | no       |

## Returns
| Return | Type                | Description                           |
|--------|---------------------|---------------------------------------|
| ref    | MutableRefObject    | Ref to attach to the fading element   |
| style  | React.CSSProperties | Initial style with opacity value of 0 |