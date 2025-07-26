# @justhookit/use-title
React Hook to dynamically update the browser title.

## Installation

#### npm
`npm i @justhookit/use-title`

#### yarn
`yarn add @justhookit/use-title`

## Usage
```js
import React from "react";
import useTitle from "@justhookit/use-title";

function App() {
  useTitle("new title name goes here");

  return (
    <h1>Hello World</h1>
  );
}
```

## Arguments
| Argument     | Type   | Description                | Required |
|--------------|--------|----------------------------|----------|
| initialTitle | String | The initial document title | yes      |

## Returns
| Argument | Type      | Description                           |
|----------|-----------|---------------------------------------|
| setTitle | Function  | Function to update the document title |