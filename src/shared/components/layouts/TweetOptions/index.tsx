import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import * as S from './styles';

import useDropdownActive from 'shared/hooks/useDropdownActive';
import ListMenuDropdown from './ListMenuDropdown';

const TweetOptions = () => {
  const { active, toggleActive } = useDropdownActive();

  return <>
    <S.IconOptionSlide onClick={toggleActive}>
      <BsThreeDots />
    </S.IconOptionSlide>
    { active && <ListMenuDropdown /> }
  </>
};

export default TweetOptions;