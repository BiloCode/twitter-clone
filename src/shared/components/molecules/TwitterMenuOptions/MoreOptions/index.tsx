import React, { memo } from 'react';
import { CgMoreO } from 'react-icons/cg';

import Option from '../Option';

const MoreOptions = () => (
  <>
    <Option content={<CgMoreO />} text='More' />
  </>
);

export default memo(MoreOptions);