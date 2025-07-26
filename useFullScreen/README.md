# @justhookit/use-full-screen
React Hook to activate/deactivate full screen mode on any React element.

## Installation

#### npm
`npm i @justhookit/use-full-screen`

#### yarn
`yarn add @justhookit/use-full-screen`

## Usage
```js
import React from "react";
import useFullScreen from "@justhookit/use-full-screen";

function App() {
	const onFullScreen = (isFull) => {
		console.log(isFull ? "Full Screen" : "Small Screen");
	};

	const { element, triggerFull, exitFull } = useFullScreen(onFullScreen);

	return (
		<div className="App" style={{ height: "1000vh" }}>
		<div ref={element}>
			<img src="https://cdn.shopify.com/s/files/1/1426/3142/files/shutterstock_2459930529_480x480.jpg?v=1724300172" />
			<button onClick={triggerFull}>Make Full Screen</button>
			<button onClick={exitFull}>Exit Full Screen</button>
		</div>
		</div>
	);
}
```

## Arguments
| Argument     | Type     | Description              			                   | Required |
|--------------|----------|--------------------------------------------------------|----------|
| callback     | Function | Called with true on enter and false on exit fullscreen | yes      |

## Returns
| Return      | Type    		  | Description                                              |
|-------------|------------------|----------------------------------------------------------|
| element     | MutableRefObject | Ref to attach to the element to fullscreen               |
| triggerFull | Function         | Call to enter fullscreen                                 |
| exitFull    | Function         | Call to exit fullscreen					                |