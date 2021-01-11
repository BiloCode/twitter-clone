import React, { FC, memo } from 'react';
import { MdDateRange } from 'react-icons/md'
import * as Styled from './styles';

interface IProps {
  value : Date
}

const DateComponent : FC<IProps> = ({ value }) => {
  const formatDate = value.toLocaleDateString('es-ES', {
    year : 'numeric',
    month : 'long',
  })
  
  return <Styled.Container>
    <Styled.Icon>
      <MdDateRange />
    </Styled.Icon>
    <Styled.Text>Se unió en {formatDate}</Styled.Text>
  </Styled.Container>
};

export default memo(DateComponent);