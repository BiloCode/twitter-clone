import { useState } from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import * as S from './styles';

import HoverableIcon from 'shared/components/common/HoverableIcon';
import TweetReactions from '../TweetReactions';

const ImageViewer = () => {
  const [ isVisible , setIsVisible ] = useState<boolean>(true);
  const toggleVisible = () => (setIsVisible(visible => !visible));

  return <S.Container>
    <S.ImageContent>
      <S.Image src="https://esports.as.com/2020/04/21/bonus/Minecraft-puede-manera-gratuita-navegador_1348085179_378891_660x371.jpg" />
      <S.HideIconFloat>
        <HoverableIcon onClick={toggleVisible}>
          <BsChevronDoubleRight />
        </HoverableIcon>
      </S.HideIconFloat>
      <S.ReactionContent>
        <TweetReactions />
      </S.ReactionContent>
    </S.ImageContent>
    { isVisible && <S.RightContent /> }
  </S.Container>
};

export default ImageViewer;