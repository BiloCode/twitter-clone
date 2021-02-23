import React from 'react';
import { FC } from 'react-dom/node_modules/@types/react';
import * as S from './styles';

type TProps = {
  icon : JSX.Element;
  amount? : number;
  onClick?() : void;
}

const TweetIcon : FC<TProps> = ({ icon , amount, onClick }) => (
  <S.Container onClick={onClick}>
    <S.IconContainer>
      {icon}
    </S.IconContainer>
    { amount && <S.Text>{amount}</S.Text> }
  </S.Container>
);

export default TweetIcon;