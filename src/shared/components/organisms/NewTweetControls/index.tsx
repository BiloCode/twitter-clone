import classnames from "classnames";
import * as S from "./styles";

import { BiImage } from "react-icons/bi";
import { AiOutlineGif } from "react-icons/ai";
import { BsBarChart, BsPlusCircle } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { HiOutlineCalendar } from "react-icons/hi";

import UserAvatar from "../../atoms/UserAvatar";
import HoverableIcon from "../../atoms/HoverableIcon";
import TwitterButton from "../../atoms/TwitterButton";
import { TweetImageContainer } from "../../atoms/TweetImageContainer";

import { useStore } from "effector-react";
import currentAccountSelector from "@store/accounts/selectors/currentAccountSelector";

const NewTweetControls = () => {
  const current_account = useStore(currentAccountSelector);
  const emptyInput = true;

  return (
    <S.Container>
      <TweetImageContainer>
        <UserAvatar image={current_account?.personalInformation.profileImage} />
      </TweetImageContainer>
      <S.RightContent>
        <S.InputContainer>
          <S.Input type="text" placeholder="¿Que esta pasando?" />
        </S.InputContainer>
        <S.ActionsContainer>
          <S.Icons>
            <HoverableIcon icon={BiImage} />
            <HoverableIcon icon={AiOutlineGif} />
            <HoverableIcon icon={BsBarChart} />
            <HoverableIcon icon={GrEmoji} />
            <HoverableIcon icon={HiOutlineCalendar} />
          </S.Icons>
          <S.TweetActions className={classnames({ "empty-input": emptyInput })}>
            {!emptyInput && (
              <>
                <S.TweetTextLimitContainer>
                  <S.TweetTextLimitIndicator />
                </S.TweetTextLimitContainer>
                <HoverableIcon icon={BsPlusCircle} />
              </>
            )}
            <TwitterButton filled>Publicar</TwitterButton>
          </S.TweetActions>
        </S.ActionsContainer>
      </S.RightContent>
    </S.Container>
  );
};

export default NewTweetControls;
