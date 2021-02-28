import { useState } from "react";

const useDropdownActive = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => setActive((active) => !active);

  return {
    active,
    toggleActive,
  };
};

export default useDropdownActive;
