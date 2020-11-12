import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div({
  height : '100%',
  display : 'flex',
  alignItems : 'center',
  position : 'relative'
});

export const Icon = styled.span({
  lineHeight : 0,
  fontSize : '1.5em'
});

const sizeIndicator = 7;

export const NewsIndicator = styled.span({
  width : sizeIndicator,
  height : sizeIndicator,
  borderRadius : '50%',
  position : 'absolute',
  top : sizeIndicator / 2,
  right: -sizeIndicator / 2,
  backgroundColor : colors.skyblue
});