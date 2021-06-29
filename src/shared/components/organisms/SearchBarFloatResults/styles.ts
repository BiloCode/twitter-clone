import styled from 'styled-components';

import { INPUT_SEARCH_HEIGHT } from '@style-config/constants';

export const MainContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
`;

export const FloatContainer = styled.div`
  width: 100%;
  min-height: 200px;
  max-height: 600px;
  overflow: auto;
  background-color: #fff;
  position: absolute;
  top: calc(${INPUT_SEARCH_HEIGHT} + 10px);
  left: 0;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 5px;
  background-color: rgb(245, 245, 245);
`;
