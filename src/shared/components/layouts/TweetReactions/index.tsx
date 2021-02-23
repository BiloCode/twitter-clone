import React from 'react';
import * as S from './styles';
import { FaRegComment } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs'

import TweetIcon from '../../common/TweetIcon';

const TweetReactions = () => (
  <S.Container>
    <TweetIcon icon={<FaRegComment />} amount={40} />
    <TweetIcon icon={<MdRefresh />} amount={3}  />
    <TweetIcon icon={<AiOutlineHeart />} amount={10}  />
    <TweetIcon icon={<BsUpload />} />
  </S.Container>
);

export default TweetReactions;