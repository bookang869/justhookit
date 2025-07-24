import usePreventLeave from "./usePreventLeave";
import { createRoot } from "react-dom/client";

function App() {
	const { enablePrevent, disablePrevent } = usePreventLeave();

	return (
		<div className="App">
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>Unprotect</button>
		</div>
	);
}
  
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);