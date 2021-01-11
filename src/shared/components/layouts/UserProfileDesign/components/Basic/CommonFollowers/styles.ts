import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div({
  display: 'flex',
  marginTop : 10
});

export const ImagesContainer = styled.div({
  width : 40,
  flexShrink : 0,
  position : 'relative'
});

export const ImageProfile = styled.div({
  position : 'absolute',
  top : 0,
  left : 0,
  zIndex : 4,
  ':nth-child(2)' : {
    left : 10,
    zIndex : 3
  },
  ':nth-child(3)' : {
    left : 20,
    zIndex : 2
  }
});

export const TextContainer = styled.p({
  color : colors.textLight,
  fontSize : 13,
  fontWeight : 400,
  marginLeft : 10,
  lineHeight : '19px'
});