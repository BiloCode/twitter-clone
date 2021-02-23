import { useState } from 'react';
import * as S from './styles';

import configurationIcons from './config';
import { BsUpload } from 'react-icons/bs';

import TweetIcon from '../../common/TweetIcon';

const TweetReactions = () => {
  const [ reactionSelect , setReactionSelect ] = useState<number>(-1);
  const changeReaction = (id : number) => setReactionSelect(() => id);

  return <S.Container>
    {
      configurationIcons(15,105,10).map((v,i) => (
        <TweetIcon
          id={i}
          icons={v.icons}
          amount={v.amount}
          colors={v.colors}
          selected={reactionSelect === i}
          onClick={changeReaction}
        />
      ))
    }
    <TweetIcon
      id={3}
      icons={{
        basic : <BsUpload />,
        selected : <BsUpload />
      }}
    />
  </S.Container>
};

export default TweetReactions;