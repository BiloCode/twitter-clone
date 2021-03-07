import { FC, UIEvent } from "react";
import { RouteComponentProps } from "@reach/router";
import * as Styled from "./styles";

import TwitterMenu from "../TwitterMenu";

import { useScrollableRightContent } from "shared/context/ScrollableRightContent/context";

const RootLayout: FC<RouteComponentProps> = ({ children }) => {
  const { rightElementRef } = useScrollableRightContent();

  const onScroll = (ev: UIEvent<HTMLElement>) => {
    if (!rightElementRef.current) return;

    let scroll, scroll_max;
    scroll = ev.currentTarget.scrollTop;
    scroll_max = 300;

    if (scroll >= scroll_max) {
      rightElementRef.current!.style.position = "absolute";
      rightElementRef.current!.style.top = -scroll_max + "px";
      return;
    }

    rightElementRef.current!.style.position = "relative";
    rightElementRef.current!.style.top = "0";
  };

  return (
    <Styled.MainContainer>
      <Styled.MenuSection>
        <TwitterMenu />
      </Styled.MenuSection>
      <Styled.MainSection onScroll={onScroll}>
        <Styled.RootSectionContainer>{children}</Styled.RootSectionContainer>
      </Styled.MainSection>
    </Styled.MainContainer>
  );
};

export default RootLayout;
