import React, { FC } from 'react';
import * as Styled from '../styles';

interface IProps {
  onClick?() : void;
}

const Follower : FC<IProps> = ({ onClick }) => (
  <Styled.Container isFollower onClick={onClick} >
    <Styled.Title>Following</Styled.Title>
  </Styled.Container>
)

export default Follower;