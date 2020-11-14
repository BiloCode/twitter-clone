import React, { FC } from 'react';
import * as Styled from './styles';
import { AiOutlineHome } from 'react-icons/ai';

import SelectableOption from '../SelectableOption';
import useLinkNavigate from 'hooks/useLinkNavigate';

interface IProps {
  isNewTweets? : boolean;
}

const HomeOption : FC<IProps> = ({ isNewTweets }) => {
  const Navigate = useLinkNavigate();

  return <SelectableOption text='Home' onClick={Navigate('/home')} >
    <AiOutlineHome />
    { isNewTweets && <Styled.IndicatorContainer /> }
  </SelectableOption>
}

export default HomeOption;