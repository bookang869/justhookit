import useFadeIn from "./useFadeIn";
import { createRoot } from "react-dom/client";

function App() {
	const fadeInH1 = useFadeIn(1, 2);
	const fadeInP = useFadeIn(5, 1);

	return (
		<div className="App">
			<h1 {...fadeInH1}>Hello</h1>
			<p {...fadeInP}>lalalala</p>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);