import { useTabs } from "./useTabs";  
import { createRoot } from "react-dom/client";

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

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
  