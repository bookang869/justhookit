# @justhookit/use-tabs
React Hook to naviagte between different tabs.

## Installation

#### npm
`npm i @justhookit/use-tabs`

#### yarn
`yarn add @justhookit/use-tabs`

## Usage
```js
import React from "react";
import useTabs from "@justhookit/use-tabs";  

// example content
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2",
  },
];

function App() {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section, idx) => (
        <button onClick={() => changeItem(idx)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
```

## Arguments
| Argument   | Type    | Description                     | Required |
|------------|---------|---------------------------------|----------|
| initialTab | Number  | Index of initially selected tab | yes      |
| allTabs    | Array   | Array of tab data               | yes      |

## Returns
| Return      | Type     | Description                                 |
|-------------|----------|---------------------------------------------|
| currentItem | any      | Currently selected tab content              |
| changeItem  | Function | Function to change the current tab by index |