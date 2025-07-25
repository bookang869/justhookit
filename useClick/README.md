# @hooks/use-click
React Hook to detect a click on any React element.

## Installation

#### npm
`npm i @justhookit/use-click`

#### yarn
`yarn add @justhookit/use-click`

## Usage
```js
import React from "react";
import useClick from "@justhookit/use-click";

function App() {
  const onClick = () => {
    console.log("Hello!");
  };
  
  const title = useClick(onClick);

  return (
    <div className="App">
      <h1 ref={title}> Hi</h1>
    </div>
  );
}
```

## Arguments
| Argument | Type     | Description                       | Required |
|----------|----------|-----------------------------------|----------|
| onClick  | Function | Function to call on element click | yes      |

## Returns
| Return  | Type             | Description                                       |
|---------|------------------|---------------------------------------------------|
| element | MutableRefObject | Ref to be attached to the clickable React element |