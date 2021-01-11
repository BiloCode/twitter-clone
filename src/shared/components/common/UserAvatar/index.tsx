import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
  image? : string;
  size : number;
  borderWidth? : number;
  hoverable? : boolean;
  onClick?() : void;
  onMouseEnter?() : void;
  onMouseLeave?() : void;
}

const UserAvatar : FC<IProps> = ({ image , borderWidth , size , onClick , hoverable , onMouseEnter , onMouseLeave }) => (
  <Styled.Container
    containerSize={size}
    borderWidth={borderWidth}
    hoverable={hoverable}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {
      image && (
        <Styled.Image src={image} draggable={false} />
      )
    }
  </Styled.Container>
);

export default UserAvatar;