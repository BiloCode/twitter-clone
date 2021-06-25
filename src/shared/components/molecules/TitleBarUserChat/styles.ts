import styled from "styled-components";

import { WHITE_LIGHT } from "config/colors";
import { TITLE_BAR_HEIGHT } from "config/constants";

export const MainContainer = styled.div`
  height: ${TITLE_BAR_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  border-bottom: 1px solid ${WHITE_LIGHT};
`;

export const UserDataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1em;
  align-items: center;
`;

export const Names = styled.div`
  display: grid;
  row-gap: 2px;
`;
