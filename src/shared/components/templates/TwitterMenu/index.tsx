import * as Styled from "./styles";

import TwitterMenuOptions from "@molecules/TwitterMenuOptions";
import AccountOption from "@organisms/AccountOption";
import TweetButton from "../../atoms/TweetButton";

const TwitterMenu = () => (
  <Styled.MainContainer>
    <Styled.MenuOptionContainer>
      <TwitterMenuOptions />
      <Styled.ButtonContainer>
        <TweetButton />
      </Styled.ButtonContainer>
    </Styled.MenuOptionContainer>
    <AccountOption />
  </Styled.MainContainer>
);

export default TwitterMenu;
