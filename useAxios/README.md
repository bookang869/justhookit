# @hooks/use-axios
React Hook to fetch data using Axios with built-in loading, error, and refetch support.

## Installation

#### npm
`npm i @justhookit/use-axios`

#### yarn
`yarn add @justhookit/use-axios`

## Usage
```js
import React from "react";
import useAxios from "@justhookit/use-axios.js";

function App() {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
	
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
```

## Arguments
| Argument      | Type     | Description                                              | Required |
|---------------|----------|----------------------------------------------------------|----------|
| opts          | Object   | Axios request config object (must include url)           | yes      |
| axiosInstance | Function | Optional custom Axios instance to use instead of default | no       |

## Returns
| Return  | Type     | Description                                       |
|---------|----------|---------------------------------------------------|
| loading | Boolean  | Indicates if the request is currently loading     |
| data    | any      | Response data from the Axios request              |
| error   | Error    | Any error thrown during the request               |
| refetch | Function | Function to manually re-trigger the Axios request |