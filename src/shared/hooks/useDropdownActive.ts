import { useState } from "react"

export default () => {
  const [ active , setActive ] = useState<boolean>(false);

  const toggleActive = () => setActive(active => !active);

  return {
    active,
    toggleActive
  }
}