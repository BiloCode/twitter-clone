import React, { FC } from 'react';

import * as GlobalStyled from '../styles';
import HoverableIcon from 'components/common/HoverableIcon';

interface IProps {
  title : string;
  icon? : JSX.Element;
}

const Simple : FC<IProps> = ({ title , icon }) => (
  <GlobalStyled.Container spaceBetween >
    <GlobalStyled.Title>{title}</GlobalStyled.Title>
    { icon && <HoverableIcon>{icon}</HoverableIcon> }
  </GlobalStyled.Container>
);

export default Simple;