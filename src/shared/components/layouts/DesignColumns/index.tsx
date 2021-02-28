import { FC } from 'react';
import * as Styled from './styles';

const DesignColumns : FC = ({ children }) => (
  <Styled.Container>
    <Styled.LeftContainer>
      {children}
    </Styled.LeftContainer>
    <Styled.RightContainer>
    </Styled.RightContainer>
  </Styled.Container>
)

export default DesignColumns;