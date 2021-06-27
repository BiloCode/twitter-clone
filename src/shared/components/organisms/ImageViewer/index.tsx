import { useState } from "react";
import * as S from "./styles";

import {
  AiOutlineClose,
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
} from "react-icons/ai";

import HoverableIcon from "shared/components/atoms/HoverableIcon";
import TweetReactions from "shared/components/molecules/TweetReactions";

const ImageViewer = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const toggleVisible = () => setIsVisible((visible) => !visible);
  const closeImageViewer = () => false;

  return (
    <S.Container>
      <S.ImageContent>
        <S.Image src="https://esports.as.com/2020/04/21/bonus/Minecraft-puede-manera-gratuita-navegador_1348085179_378891_660x371.jpg" />
        <S.HideIconFloat top={10} right={10}>
          <HoverableIcon
            icon={isVisible ? AiOutlineDoubleRight : AiOutlineDoubleLeft}
            onClick={toggleVisible}
          />
        </S.HideIconFloat>
        <S.HideIconFloat top={10} left={10}>
          <HoverableIcon icon={AiOutlineClose} onClick={closeImageViewer} />
        </S.HideIconFloat>
        <S.ReactionContent>
          <TweetReactions isBig />
        </S.ReactionContent>
      </S.ImageContent>
      {isVisible && <S.RightContent />}
    </S.Container>
  );
};

export default ImageViewer;
