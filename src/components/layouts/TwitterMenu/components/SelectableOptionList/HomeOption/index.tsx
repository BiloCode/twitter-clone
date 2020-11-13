import React, { FC } from 'react';
import * as Styled from './styles';
import { AiOutlineHome } from 'react-icons/ai';

import SelectableOption from '../SelectableOption';

interface IProps {
  isNewTweets? : boolean;
}

const HomeOption : FC<IProps> = ({ isNewTweets }) => (
  <SelectableOption text='Home' >
    <AiOutlineHome />
    { isNewTweets && <Styled.IndicatorContainer /> }
  </SelectableOption>
);

export default HomeOption;