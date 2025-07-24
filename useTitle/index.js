import React from "react";
import { useTitle } from "./useTitle";
import { createRoot } from "react-dom/client";

function App() {
  const titleUpdater = useTitle("Title");

  setTimeout(() => (titleUpdater("Home"), 5000));

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
  
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);