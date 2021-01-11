import React, { FC } from 'react';
import * as Styled from './styles';
import { FiChevronDown } from 'react-icons/fi'

interface IProps {
  showIndicator? : boolean
}

const ArrowDown : FC<IProps> = ({ showIndicator }) => (
  <Styled.Container>
    <Styled.Icon>
      <FiChevronDown />
    </Styled.Icon>
    { showIndicator && <Styled.NewsIndicator /> }
  </Styled.Container>
);

export default ArrowDown;