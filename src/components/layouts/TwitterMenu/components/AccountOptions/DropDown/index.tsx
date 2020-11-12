import React, { FC } from 'react';
import * as Styled from './styles';

import ShadedContainer from 'components/common/ShadedContainer';
import ItemDropDown from '../ItemDropDown';

interface IProps {
  onClose?() : void;
}

const DropDown : FC<IProps> = ({ onClose }) => (
  <ShadedContainer>
    <ItemDropDown text='Billy Alexander Paredes Aycho' /> 
    <ItemDropDown text='TheBilo Paredes' /> 
    <ItemDropDown text='Agregar una cuenta existente' />  
    <ItemDropDown text='Administrar cuentas' />
    <ItemDropDown text='Cerrar la sesión' />
  </ShadedContainer>
);

export default DropDown;