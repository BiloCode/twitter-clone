import { BiImage } from "react-icons/bi";
import { AiOutlineGif } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { HiOutlineCalendar } from "react-icons/hi";
import * as S from "./styles";

import { TweetImageContainer } from "../TweetImageContainer";
import UserAvatar from "../UserAvatar";

import { useStore } from "effector-react";
import currentAccountSelector from "store/accounts/selectors/currentAccountSelector";
import HoverableIcon from "../HoverableIcon";
import TweetButton from "../TweetButton";
import FollowButton from "../FollowButton";

const NewTweetControls = () => {
  const current_account = useStore(currentAccountSelector);

  return (
    <S.Container>
      <TweetImageContainer>
        <UserAvatar
          size={49}
          image={current_account?.personalInformation.profileImage}
        />
      </TweetImageContainer>
      <S.RightContent>
        <S.DivContainer>
          <S.Input type="text" placeholder="¿Que esta pasando?" />
        </S.DivContainer>
        <S.ActionsContainer>
          <S.Icons>
            <HoverableIcon>
              <BiImage />
            </HoverableIcon>
            <HoverableIcon>
              <AiOutlineGif />
            </HoverableIcon>
            <HoverableIcon>
              <BsBarChart />
            </HoverableIcon>
            <HoverableIcon>
              <GrEmoji />
            </HoverableIcon>
            <HoverableIcon>
              <HiOutlineCalendar />
            </HoverableIcon>
          </S.Icons>
          <FollowButton isFollow={false}>Publicar</FollowButton>
        </S.ActionsContainer>
      </S.RightContent>
    </S.Container>
  );
};

export default NewTweetControls;
