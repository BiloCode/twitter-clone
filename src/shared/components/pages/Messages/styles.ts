import styled from 'styled-components';

import { WHITE_LIGHT } from '@style-config/colors';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-auto-rows: max-content;
`;

export const LeftContent = styled.div`
  height: 100vh;
  border-right: 1px solid ${WHITE_LIGHT};
`;
