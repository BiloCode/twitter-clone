import { FC } from 'react';
import { BsUpload } from 'react-icons/bs';
import * as S from './styles';

import TweetIcon from '../../atoms/TweetIcon';
import configurationIcons from './config';

type TProps = {
  isBig?: boolean;
};

const TweetReactions: FC<TProps> = ({ isBig }) => (
  <S.Container isBig={isBig}>
    {configurationIcons(15, 105, 10).map((v, i) => (
      <TweetIcon
        key={i}
        icons={v.icons}
        amount={v.amount}
        styles={{ isBig, colors: v.colors }}
      />
    ))}
    <TweetIcon
      isMountable={false}
      styles={{ isBig }}
      icons={{
        basic: <BsUpload />,
        selected: <BsUpload />,
      }}
    />
  </S.Container>
);

export default TweetReactions;
