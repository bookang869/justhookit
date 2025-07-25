# @hooks/use-notification
React Hook to enable web browser notifications.

## Installation

#### npm
`npm i @justhookit/use-notification`

#### yarn
`yarn add @justhookit/use-notification`

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
| Argument | Type   | Description              					| Required |
|----------|--------|-------------------------------------------|----------|
| title    | String | Notification of title 					| yes      |
| options  | Object | Optional configuration (body, icon, etc.) | no       |

## Returns
| Return    | Type     | Description                          |
|-----------|----------|--------------------------------------|
| fireNotif | Function | Function to trigger the notification |

## Notes
***ONLY works when the notificaiton setting is turned on***