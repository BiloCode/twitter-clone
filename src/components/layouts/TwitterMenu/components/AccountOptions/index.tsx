import React, { FC, useState } from 'react';
import * as Styled from './styles';

import ArrowDown from './ArrowDown';
import UserInformation from 'components/common/UserInformation';
import DropDown from './DropDown';

const AccountOptions : FC = () => {
  const [ isDropdownHide , setIsDropdownHide ] = useState<boolean>(false);

  return <Styled.Container>
    <UserInformation.Basic
      image='https://www.elcomercio.com/files/og_thumbnail/uploads/2020/07/27/5f1f38a4e0fab.gif'
      username='@TBilo16'
      nickname='TheBilo16'
      onClick={() => setIsDropdownHide(isHide => !isHide)}
    >
      <ArrowDown />
    </UserInformation.Basic>
    { isDropdownHide && <DropDown /> }
  </Styled.Container>
};

export default AccountOptions;