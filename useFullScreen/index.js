import useFullScreen from "./useFullScreen";
import { createRoot } from "react-dom/client";

function App() {
	const onFullScreen = (isFull) => {
		console.log(isFull ? "Full Screen" : "Small Screen");
	};

	const { element, triggerFull, exitFull } = useFullScreen(onFullScreen);

	return (
		<div className="App" style={{ height: "1000vh" }}>
		<div ref={element}>
			<img src="https://cdn.shopify.com/s/files/1/1426/3142/files/shutterstock_2459930529_480x480.jpg?v=1724300172" />
			<button onClick={triggerFull}>Make Full Screen</button>
			<button onClick={exitFull}>Exit Full Screen</button>
		</div>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);