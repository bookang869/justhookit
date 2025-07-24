import useBeforeLeave from "./useBeforeLeave";
import { createRoot } from "react-dom/client";

function App() {
	const askNotToLeave = () => {
		console.log("Please don't leave...");
	};

	useBeforeLeave(askNotToLeave);

	return (
		<div className="App">
			<h1>Hello</h1>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);