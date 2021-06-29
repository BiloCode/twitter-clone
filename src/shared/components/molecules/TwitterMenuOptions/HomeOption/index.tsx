import React, { FC } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import * as S from './styles';

interface IProps {
  isNewTweets? : boolean;
}

const HomeOption : FC<IProps> = ({ isNewTweets }) => (
  <>
    <AiOutlineHome />
    { isNewTweets && <S.IndicatorContainer /> }
  </>
);

export default HomeOption;
