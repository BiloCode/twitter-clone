import styled from "styled-components";

import { colors } from "config/colors";

export const MainText = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: ${colors.textLight};

  &.small {
    font-size: 14px;
  }

  &.e-small {
    font-size: 13px;
  }
`;
