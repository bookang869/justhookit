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
import useHover from "@justhookit/use-hover";

function App() {
  const sayHello = () => {
    console.log("Hello!");
  };
  
  const title = useHover(sayHello);

  return (
    <div className="App">
      <h1 ref={title}> Hi</h1>
    </div>
  );
}
```

## Arguments
| Argument | Type    | Description              | Required |
|----------|---------|--------------------------|----------|
| idx      | Integer | The index of initial tab | yes      |
| content  | Array   | The list of tabs         | yes      |