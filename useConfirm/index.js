import useConfirm from "./useConfirm";
import { createRoot } from "react-dom/client";

function App() {
	const deleteItem = () => {
		console.log("Deleting Item...");
	};
	
	const abort = () => {
		console.log("aborted");
	}

	const confirmDelete = useConfirm("Are you sure?", deleteItem, abort);
	
	return (
		<div className="App">
		<button onClick={confirmDelete}>Delete the item</button>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);