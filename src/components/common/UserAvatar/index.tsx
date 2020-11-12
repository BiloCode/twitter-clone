import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
  image? : string;
  size : number;
  hoverable? : boolean;
  onClick?() : void;
  onMouseEnter?() : void;
  onMouseLeave?() : void;
}

const UserAvatar : FC<IProps> = ({ image , size , onClick , onMouseEnter , onMouseLeave }) => (
  <Styled.Container
    size={size}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {
      image && (
        <Styled.Image src={image} />
      )
    }
  </Styled.Container>
);

export default UserAvatar;