import { TITLE_BAR_HEIGHT } from "config/constants";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 420px;
  height: 500px;
  position: absolute;
  bottom: 0;
  right: 10px;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 10px 15px rgb(0, 0, 0, 0.1);
  transition: 0.3s;

  &.hidden {
    transform: translateY(calc(100% - ${TITLE_BAR_HEIGHT}));
  }
`;

export const TitleContainer = styled.div``;
