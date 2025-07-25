# @hooks/use-hover
React Hook to detect a hover on any React element.

## Installation

#### npm
`npm i @justhookit/use-hover`

#### yarn
`yarn add @justhookit/use-hover`

## Usage
```js
import React from "react";
import useHover from "@justhookit/use-hover";

function App() {
  const onHover = () => {
    console.log("Hello!");
  };
  
  const title = useHover(onHover);

  return (
    <div className="App">
      <h1 ref={title}> Hello World</h1>
    </div>
  );
}
```

## Arguments
| Argument | Type     | Description                    | Required |
|----------|----------|--------------------------------|----------|
| onHover  | Function | Function to run on mouse enter | yes      |

## Returns
| Return  | Type             | Description                                       |
|---------|------------------|---------------------------------------------------|
| element | MutableRefObject | Ref to be attached to the hoverable React element |