import React, { FC, memo } from 'react';
import * as Styled from './styles';

interface IProps {
  following : number;
  followers : number;
}

const FollowSection : FC<IProps> = ({ followers , following }) => (
  <Styled.Container>
    <Styled.ContainerText>
      <Styled.TextBold>{following}</Styled.TextBold>
      <Styled.TextLight>Following</Styled.TextLight>
    </Styled.ContainerText>
    <Styled.ContainerText>
      <Styled.TextBold>{followers}</Styled.TextBold>
      <Styled.TextLight>Followers</Styled.TextLight>
    </Styled.ContainerText>
  </Styled.Container>
);

export default memo(FollowSection);