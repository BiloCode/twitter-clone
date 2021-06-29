import { FaRegComment } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { colors } from '@style-config/colors';

const configurationIcons = (comments: number, retweet: number, hearts: number) => [
  {
    amount: comments,
    icons: {
      basic: <FaRegComment />,
      selected: <FaRegComment />,
    },
  },
  {
    amount: retweet,
    colors: {
      background: colors.greenSmooth,
      text: colors.green,
    },
    icons: {
      basic: <MdRefresh />,
      selected: <MdRefresh />,
    },
  },
  {
    amount: hearts,
    colors: {
      background: colors.redSmooth,
      text: colors.red,
    },
    icons: {
      basic: <AiOutlineHeart />,
      selected: <AiFillHeart />,
    },
  },
];

export default configurationIcons;
