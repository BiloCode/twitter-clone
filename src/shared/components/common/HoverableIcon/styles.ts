import styled from "styled-components";
import { colors } from "config/colors";

const size = 37;

export const Container = styled.div({
  width : size,
  height : size,
  position : 'relative',
  display : 'flex',
  alignItems : 'center',
  justifyContent : 'center',
  borderRadius : size / 2,
  cursor : 'pointer',
  ':hover' : {
    backgroundColor : colors.skyblueSmooth,
  },
  ':active' : {
    backgroundColor : colors.skyblueSmooth2
  }
});

export const Icon = styled.span({
  color: colors.skyblue,
  lineHeight : 0,
  fontSize : '1.4em'
});