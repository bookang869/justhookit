# @hooks/use-prevent-leave
React Hook to warn the user before accidentally leaving the page.

## Installation

#### npm
`npm i @justhookit/use-prevent-leave`

#### yarn
`yarn add @justhookit/use-prevent-leave`

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

## Returns
| Return         | Type     | Description                      |
|----------------|----------|----------------------------------|
| enablePrevent  | Function | Enables the confirmation dialog  |
| disablePrevent | Function | Disables the confirmation dialog |