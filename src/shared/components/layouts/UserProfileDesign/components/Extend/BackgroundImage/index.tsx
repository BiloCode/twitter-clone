import React, { FC, memo } from 'react';
import * as Styled from './styles';

interface IProps {
  url? : string;
}

const BackgroundImage : FC<IProps> = ({ url }) => (
  <Styled.Container>
    { url && (
      <Styled.BackgroundImage src={url} alt='user-profile-image' />
    )}
  </Styled.Container>
);

export default memo(BackgroundImage);