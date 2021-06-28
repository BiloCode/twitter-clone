import React, { FC, memo, useState } from "react";
import * as Styled from "./styles";

import ArrowDown from "../../atoms/ArrowDown";
import UserBasicData from "@templates/UserBasicData";
import DropDown from "./DropDown";

import { useStore } from "effector-react";
import currentAccountSelector from "@store/accounts/selectors/currentAccountSelector";
import haveNotificationSelector from "@store/accounts/selectors/haveNotificationSelector";
import classNames from "classnames";

const AccountOption: FC = () => {
  const current_account = useStore(currentAccountSelector);
  const is_have_notification = useStore(haveNotificationSelector);

  const [is_dropdown_hide, setIsDropdownHide] = useState<boolean>(false);
  const ToggleDropdown = () => setIsDropdownHide((isHide) => !isHide);

  return (
    <Styled.Container className={classNames({ "not-active": !is_dropdown_hide })}>
      <UserBasicData
        image={current_account?.personalInformation.profileImage!}
        username={current_account?.personalInformation.username!}
        nickname={current_account?.personalInformation.nickname!}
        onClick={ToggleDropdown}
      >
        <ArrowDown showIndicator={is_have_notification} />
      </UserBasicData>
      {is_dropdown_hide && <DropDown />}
    </Styled.Container>
  );
};

export default memo(AccountOption);
