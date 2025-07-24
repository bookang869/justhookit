import useClick from "./useClick";
import { createRoot } from "react-dom/client";

function App() {
  const sayHello = () => {
    console.log("Hello!");
  };
  
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}> Hi</h1>
    </div>
  );
}
  
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);