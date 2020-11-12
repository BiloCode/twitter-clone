import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { BsBookmark , BsFileText } from 'react-icons/bs'
import { AiOutlineHome , AiOutlineInbox , AiOutlineNumber , AiOutlineBell , AiOutlineUser } from 'react-icons/ai';

const config = [
  {
    link : '',
    text : '',
    icon : () => <FiTwitter />
  },
  {
    link : '',
    text : 'Home',
    icon : () => <AiOutlineHome />
  },
  {
    link : '',
    text : 'Explore',
    icon : () => <AiOutlineNumber />
  },
  {
    link : '',
    text : 'Notifications',
    icon : () => <AiOutlineBell />
  },
  {
    link : '',
    text : 'Messages',
    icon : () => <AiOutlineInbox />
  },
  {
    link : '',
    text : 'Saves',
    icon : () => <BsBookmark />
  },
  {
    link : '',
    text : 'Lists',
    icon : () => <BsFileText />
  },
  {
    link : '',
    text : 'Profile',
    icon : () => <AiOutlineUser />
  }
]

export default config;