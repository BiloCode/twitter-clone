import React from 'react';
import * as Styled from './styles';

import SelectableOptionList from './components/SelectableOptionList';
import AccountOptions from './components/AccountOptions';
import TweetButton from '../../common/TweetButton';

const TwitterMenu = () => (
  <Styled.MainContainer>
    <Styled.MenuOptionContainer>
      <SelectableOptionList />
      <Styled.ButtonContainer>
        <TweetButton />
      </Styled.ButtonContainer>  
    </Styled.MenuOptionContainer>
    <AccountOptions />
  </Styled.MainContainer>
);

export default TwitterMenu;