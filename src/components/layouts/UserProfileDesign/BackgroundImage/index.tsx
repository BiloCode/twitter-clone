import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
  image? : string;
}

const BackgroundImage : FC<IProps> = ({ image }) => (
  <Styled.Container>
    { image && (
      <Styled.BackgroundImage src={image} alt='user-profile-image' />
    )}
  </Styled.Container>
);

export default BackgroundImage;