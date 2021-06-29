import { FC, useRef } from 'react';
import { ScrollableRightContent } from './context';

export const ScrollableRightContentProvider: FC = ({ children }) => {
  const rightElementRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollableRightContent.Provider value={{ rightElementRef }}>
      {children}
    </ScrollableRightContent.Provider>
  );
};
