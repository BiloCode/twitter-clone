import styled from "styled-components";

import { TITLE_BAR_HEIGHT } from "@style-config/constants";

export const MainContainer = styled.div`
  width: 100%;
  height: ${TITLE_BAR_HEIGHT};
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  padding: 0 1em;
  box-sizing: border-box;
  background-color: #fff;
`;

export const IconContainer = styled.div`
  padding: 0 0 0 1em;
  box-sizing: border-box;
`;
