import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();

  useEffect(() => {
    if (element) {
      element.current.addEventListener("click", onClick);
    }
    
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};