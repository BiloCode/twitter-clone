import { useState } from "react";
import * as S from "./styles";

import { AiOutlineSearch } from "react-icons/ai";

import SearchBar from "shared/components/molecules/InputWithIcon";
import TwitterUserChat from "shared/components/organisms/TwitterUserChat";

import messages from "application/mocks/messages";

const UserSearchChat = () => {
  const [focus, setFocus] = useState<boolean>(false);

  const onFocus = () => setFocus(() => true);
  const onBlur = () => setFocus(() => false);

  return (
    <div>
      <S.SearchBarContainer>
        <SearchBar
          onBlur={onBlur}
          isActive={focus}
          onFocus={onFocus}
          placeholder="Write any name"
          icon={{ type: AiOutlineSearch }}
        />
      </S.SearchBarContainer>
      <div>
        {messages.map((v) => (
          <TwitterUserChat
            chat={{ lastUpdated: v.lastUpdated, message: v.message }}
            user={{
              username: v.username,
              nickname: v.nickname,
              avatarUrl: v.avatar,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UserSearchChat;
