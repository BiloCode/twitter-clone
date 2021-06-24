import * as Styled from "./styles";

import TwitterMenuOptions from "shared/components/molecules/TwitterMenuOptions";
import AccountOption from "shared/components/organisms/AccountOption";
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
