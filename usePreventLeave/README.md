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
import usePreventLeave from "@justhookit/use-prevent-leave";

function App() {
	const { enablePrevent, disablePrevent } = usePreventLeave();

	return (
		<div className="App">
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>Unprotect</button>
		</div>
	);
}
```

## Arguments
| Argument | Type    | Description              | Required |
|----------|---------|--------------------------|----------|
| idx      | Integer | The index of initial tab | yes      |
| content  | Array   | The list of tabs         | yes      |