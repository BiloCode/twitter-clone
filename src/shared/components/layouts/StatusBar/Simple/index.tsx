import React, { FC } from 'react';

import * as GlobalStyled from '../styles';
import HoverableIcon from 'shared/components/common/HoverableIcon';

interface IProps {
  title : string;
  activeBorder? : boolean;
  icon? : JSX.Element;
}

const Simple : FC<IProps> = ({ title , icon , activeBorder }) => (
  <GlobalStyled.Container spaceBetween activeBorder={activeBorder} >
    <GlobalStyled.Title>{title}</GlobalStyled.Title>
    { icon && <HoverableIcon>{icon}</HoverableIcon> }
  </GlobalStyled.Container>
);

Simple.defaultProps = {
  activeBorder : true
}

export default Simple;