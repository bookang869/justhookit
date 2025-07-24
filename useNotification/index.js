import useNotification from "./useNotification";
import { createRoot } from "react-dom/client";

function App() {
	const triggerNotif = useNotification("Here is your notification!", {
		body: "Here is the content!",
	});

	return (
		<div className="App" style={{ height: "1000vh" }}>
			<button onClick={triggerNotif}>Notify!</button>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);