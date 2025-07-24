import useInput from "./useInput";
import { createRoot } from "react-dom/client";

function App() {
  const maxLen = (value) => !value.includes('@');
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);