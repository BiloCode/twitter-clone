import React, { memo } from 'react';

import config from './config';
import SelectableOption from '../SelectableOption';

const SelectableOptionList = () => (
  <div>
    {
      config.map((v,i) => (
        <SelectableOption key={i} link={v.link} text={v.text} >
          {v.icon()}
        </SelectableOption>
      ))
    }      
  </div>
);

export default memo(SelectableOptionList);