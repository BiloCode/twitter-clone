import { FC } from 'react';
import { createPortal } from 'react-dom';

const float_div = document.getElementById("float");

const FloatPortal : FC = ({ children }) => createPortal(
  children,
  float_div!
);

export default FloatPortal;