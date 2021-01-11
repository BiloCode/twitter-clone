import React from 'react';
import { CgMoreO } from 'react-icons/cg';

import SelectableOption from '../SelectableOption';

const MoreOptions = () => (
  <SelectableOption text='More' >
    <CgMoreO />
  </SelectableOption>
);

export default MoreOptions;