import React, { FC } from 'react';
import * as S from './styles';
import { AiOutlineHome } from 'react-icons/ai';

interface IProps {
  isNewTweets? : boolean;
}

const HomeOption : FC<IProps> = ({ isNewTweets }) => (
  <>
    <AiOutlineHome />
    { isNewTweets && <S.IndicatorContainer /> }
  </>
)

export default HomeOption;