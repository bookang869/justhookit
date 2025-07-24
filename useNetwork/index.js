import useNetwork from "./useNetwork";
import { createRoot } from "react-dom/client";

function App() {
	const handleNetworkChange = (online) => {
		console.log(online ? "Online" : "Offline");
	};

	const onLine = useNetwork(handleNetworkChange);

	return (
		<div className="App">
			<h1>{onLine ? "Online" : "Offline"}</h1>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);