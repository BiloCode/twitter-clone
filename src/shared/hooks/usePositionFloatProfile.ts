import { MouseEvent } from 'react';
import { SetActive, SetPosition } from '@store/float_user_profile';

const usePositionFloatProfile = () => {
  let timeout: NodeJS.Timeout;

  const onMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const separator = 5;
    const { x, y, height } = element.getBoundingClientRect();

    timeout = setTimeout(() => {
      SetActive(true);
      SetPosition({
        x,
        y: y + height + separator,
      });
    }, 800);
  };

  const onMouseLeave = () => {
    clearTimeout(timeout);
  };

  return {
    onMouseEnter,
    onMouseLeave,
  };
};

export default usePositionFloatProfile;
