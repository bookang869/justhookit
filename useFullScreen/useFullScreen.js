import { useRef } from "react";

const useFullScreen = (callback) => {
	const element = useRef();

	const runCallback = (isFull) => {
		if (callback && typeof callback === "function") {
			callback(isFull);
		}
	};

	const triggerFull = () => {
		if (element.current) {
			if (element.current.requestFullscreen) {
				element.current.requestFullscreen();
			} else if (element.current.mozRequestFullscreen) {
				element.current.mozRequestFullscreen();
			} else if (element.current.webkitRequestFullscreen) {
				element.current.webkitRequestFullscreen();
			} else if (element.current.msRequestFullscreen) {
				element.current.msRequestFullscreen();
			}

			runCallback(true);
		}
	};

	const exitFull = () => {
		if (document.requestFullscreen) {
			document.exitFullscreen();
		} else if (document.mozRequestFullscreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitRequestFullscreen) {
			document.webkitExitFullScreen();
		} else if (element.current.msRequestFullscreen) {
			document.msExitFullScreen();
		}

		runCallback(false);
	};
	return { element, triggerFull, exitFull };
};

export default useFullScreen;