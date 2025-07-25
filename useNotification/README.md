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
import useNotification from "@justhookit/use-notification";

function App() {
	const triggerNotif = useNotification("Here is your notification!", {
		body: "Here is the content!",
	});

	return (
		<div className="App" style={{ height: "1000vh" }}>
			<button onClick={triggerNotif}>Notify!</button>
		</div>
	);
}
```

## Arguments
| Argument | Type    | Description              | Required |
|----------|---------|--------------------------|----------|
| idx      | Integer | The index of initial tab | yes      |
| content  | Array   | The list of tabs         | yes      |