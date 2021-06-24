import React, { FC, memo } from "react";
import * as Styled from "./styles";

import Item from "./Item";
import UserAccountItem from "../../../molecules/UserAccountItem";
import ShadedContainer from "shared/components/atoms/ShadedContainer";

import { useStore } from "effector-react";
import { accountsStore } from "store/accounts";
import { TPersonalInformation } from "store/accounts/types";
import { AccountChange, selectedAccountStore } from "store/account_selected";
import currentAccountSelector from "store/accounts/selectors/currentAccountSelector";

const DropDown: FC = () => {
  const selected_account = useStore(selectedAccountStore);
  const user_accounts = useStore(accountsStore);
  const current_account = useStore(currentAccountSelector);

  const OnSelectedAccount = (id: string) => () => AccountChange(id);
  const SetUserData = (personalInformation: TPersonalInformation) => ({
    image: personalInformation.profileImage,
    nickname: personalInformation.nickname,
    username: personalInformation.username,
  });

  return (
    <Styled.RootContainer>
      <ShadedContainer horizontalSize="100%">
        <Styled.Container>
          {user_accounts.map((v, i) => (
            <UserAccountItem
              key={v._id}
              notifications={v.notifications}
              isAuthenticated={v._id === selected_account}
              user={SetUserData(v.personalInformation)}
              onClick={OnSelectedAccount(v._id)}
            />
          ))}
          <Item text="Add a new exists account" />
          {user_accounts.length > 1 && <Item text="Manage accounts" />}
          <Item
            text={`Log out @${current_account?.personalInformation.username}`}
          />
        </Styled.Container>
      </ShadedContainer>
    </Styled.RootContainer>
  );
};

export default memo(DropDown);
