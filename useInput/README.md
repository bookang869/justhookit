# @hooks/use-input
React Hook to manage controlled form input with optional validation.

## Installation

#### npm
`npm i @justhookit/use-input`

#### yarn
`yarn add @justhookit/use-input`

## Usage
```js
import React from "react";
import useInput from "@justhookit/use-input";

function App() {
  const initialVal = "Mickey";
  const validator = (value) => !value.includes('@');
  const name = useInput(initialVal, validator);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
```

## Arguments
| Argument     | Type     | Description                 | Required |
|--------------|----------|-----------------------------|----------|
| initialValue | String   | Initial value of the input  | yes      |
| validator    | Function | Optional validator function | yes      |

## Returns
| Return   | Type     | Description                               |
|----------|----------|-------------------------------------------|
| value    | String   | Current value of the input                |
| onChange | Function | Function to validate and update the input |