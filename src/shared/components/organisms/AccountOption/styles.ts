import styled from 'styled-components';

import { colors } from '@style-config/colors';

export const Container = styled.div`
  width: 250px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 30px;
  user-select: none;
  cursor: pointer;
  position: relative;

  &.not-active {
    &:hover {
      background-color: ${colors.skyblueSmooth};
    }
  }
`;
