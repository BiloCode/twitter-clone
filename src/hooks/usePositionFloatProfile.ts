import { MouseEvent } from "react";
import { SetActive, SetPosition } from "store/tweet/userProfileFloatStore";

const usePositionFloatProfile = () => {
  let timeout : number;

  const onMouseEnter = (event : MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const { x , y } = element.getBoundingClientRect();
    
    timeout = setTimeout(() => {
      SetActive(true);
      SetPosition({ x , y });
    }, 800);
  }

  const onMouseLeave = () => {
    clearTimeout(timeout);
  }

  return {
    onMouseEnter,
    onMouseLeave
  }
}

export default usePositionFloatProfile;