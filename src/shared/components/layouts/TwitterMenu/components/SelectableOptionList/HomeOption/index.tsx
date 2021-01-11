import React, { FC } from 'react';
import * as Styled from './styles';
import { AiOutlineHome } from 'react-icons/ai';

import SelectableOption from '../SelectableOption';
import useLinkNavigate from 'shared/hooks/useLinkNavigate';
import useRouteCheck from 'shared/hooks/useRouteCheck';

interface IProps {
  isNewTweets? : boolean;
}

const HomeOption : FC<IProps> = ({ isNewTweets }) => {
  const Navigate = useLinkNavigate();
  const RouteCheck = useRouteCheck();

  return <SelectableOption
    text='Home'
    isSelect={RouteCheck('home')}
    onClick={Navigate('/home')}
  >
    <AiOutlineHome />
    { isNewTweets && <Styled.IndicatorContainer /> }
  </SelectableOption>
}

export default HomeOption;