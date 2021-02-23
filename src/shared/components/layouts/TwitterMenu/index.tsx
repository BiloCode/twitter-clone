import React from 'react';
import * as Styled from './styles';

import TwitterMenuOptions from '../TwitterMenuOptions';
import AccountOption from '../AccountOption';
import TweetButton from '../../common/TweetButton';

const TwitterMenu = () => (
  <Styled.MainContainer>
    <Styled.MenuOptionContainer>
      <TwitterMenuOptions />
      <Styled.ButtonContainer>
        <TweetButton />
      </Styled.ButtonContainer>
    </Styled.MenuOptionContainer>
    <AccountOption />
  </Styled.MainContainer>
);

export default TwitterMenu;