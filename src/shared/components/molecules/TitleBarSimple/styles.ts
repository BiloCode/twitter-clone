import styled from "styled-components";

import { TITLE_BAR_HEIGHT } from "@style-config/constants";

export const Container = styled.div`
  width: 100%;
  height: ${TITLE_BAR_HEIGHT};
  padding: 0 1em;
  display: flex;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(240, 240, 240);
`;

export const TextContainer = styled.div`
  display: grid;
  row-gap: 5px;
`;
