# @hooks/use-title
React Hook to dynamically update the document title.

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
| Argument | Type   | Description                                     | Required |
|----------|--------|-------------------------------------------------|----------|
| title    | String | The new title you want to apply to your document| yes      |