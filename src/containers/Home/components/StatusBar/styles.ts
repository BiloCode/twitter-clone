import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div({
  height : 53,
  padding : '0 15px',
  display : 'flex',
  justifyContent : 'space-between',
  alignItems : 'center',
  borderBottom : '1px solid rgb(230,230,230)'
});

export const Title = styled.span({
  fontSize : 19,
  fontWeight : 800
});

const size = 37;

export const IconContainer = styled.div({
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