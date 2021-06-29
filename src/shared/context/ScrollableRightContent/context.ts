import {
  createContext, createRef, RefObject, useContext,
} from 'react';

export type ScrollableRightContentType = {
  rightElementRef: RefObject<HTMLDivElement>;
};

export const ScrollableRightContent = createContext<ScrollableRightContentType>(
  {
    rightElementRef: createRef(),
  },
);

export const useScrollableRightContent = () => useContext(ScrollableRightContent);
