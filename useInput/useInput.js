import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  let willUpdate = true;

  const onChange = (event) => {
    // same as const value = event.target.value
    const {
      target: { value },
    } = event;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default useInput;