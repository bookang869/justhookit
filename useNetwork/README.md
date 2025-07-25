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
import useNetwork from "@justhookit/use-network";

function App() {
	const handleNetworkChange = (online) => {
		console.log(online ? "Online" : "Offline");
	};

	const onLine = useNetwork(handleNetworkChange);

	return (
		<div className="App">
			<h1>{onLine ? "Online" : "Offline"}</h1>
		</div>
	);
}
```

## Arguments
| Argument | Type    | Description              | Required |
|----------|---------|--------------------------|----------|
| idx      | Integer | The index of initial tab | yes      |
| content  | Array   | The list of tabs         | yes      |