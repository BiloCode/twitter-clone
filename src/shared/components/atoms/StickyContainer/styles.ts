import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  position: sticky;
  z-index: 2;

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
  }
`;
