# @hooks/use-network
React Hook to detect whether the user is online or offline.

## Installation

#### npm
`npm i @justhookit/use-network`

#### yarn
`yarn add @justhookit/use-network`

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
| Argument | Type     | Description              							 | Required |
|----------|----------|------------------------------------------------------|----------|
| onChange | Function | Optional callback triggered on network status change | no       |

## Returns
| Return | Type    | Description                      |
|--------|---------|----------------------------------|
| status | Boolean | true if online, false if offline |