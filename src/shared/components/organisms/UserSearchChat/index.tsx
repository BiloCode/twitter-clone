import { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import SearchBar from '@molecules/InputWithIcon';
import TwitterUserChat from '@molecules/TwitterUserChat';

import messages from '@application/mocks/messages';
import * as S from './styles';

type ChatProps = {
  floating?: boolean;
  onClickChat?(): void;
};

const UserSearchChat = ({ floating, onClickChat }: ChatProps) => {
  const [focus, setFocus] = useState<boolean>(false);

  const onFocus = () => setFocus(() => true);
  const onBlur = () => setFocus(() => false);

  return (
    <div>
      {!floating && (
        <S.SearchBarContainer>
          <SearchBar
            onBlur={onBlur}
            isActive={focus}
            onFocus={onFocus}
            placeholder="Write any name"
            icon={{ type: AiOutlineSearch }}
          />
        </S.SearchBarContainer>
      )}
      <div>
        {messages.map((v, i) => (
          <TwitterUserChat
            key={i}
            onClick={onClickChat}
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
