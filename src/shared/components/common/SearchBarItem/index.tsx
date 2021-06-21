import * as S from "./styles";

import faker from "faker";

import { BsPersonFill } from "react-icons/bs";

import UserBasicData from "../UserBasicData";

type IProps = {
  isFollowing?: boolean;
};

const SearchBarItem = ({ isFollowing }: IProps) => (
  <S.MainContainer>
    {isFollowing && (
      <S.TopText>
        <S.Icon>
          <BsPersonFill />
        </S.Icon>
        <S.Text>Following</S.Text>
      </S.TopText>
    )}
    <UserBasicData
      image={faker.random.image()}
      nickname={faker.name.findName()}
      username={faker.name.findName()}
      bordeable={false}
    />
  </S.MainContainer>
);

export default SearchBarItem;
