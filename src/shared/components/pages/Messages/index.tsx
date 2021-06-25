import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import TitleBarPush from "shared/components/molecules/TitleBarPush";
import SearchBar from "shared/components/molecules/SearchBar";

import { HiOutlineCog } from "react-icons/hi";
import { RiMailAddLine } from "react-icons/ri";

const Messages: FC<RouteComponentProps> = () => (
  <S.MainContainer>
    <div>
      <TitleBarPush
        title="Messages"
        icons={[
          {
            element: <HiOutlineCog />,
          },
          {
            element: <RiMailAddLine />,
          },
        ]}
      />
      <S.SearchBarContainer>
        <SearchBar />
      </S.SearchBarContainer>
    </div>
    <div></div>
  </S.MainContainer>
);

export default Messages;
