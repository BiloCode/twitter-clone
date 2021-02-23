import { colors } from "config/colors";
import styled from "styled-components";

export const TweetContainer = styled.article({
  padding : '0 15px',
  position : 'relative',
  borderBottom : '1px solid rgb(230,230,230)'
});

export const Container = styled.div({
  marginTop : 10,
  display : 'flex',
});

export const ImageContainer = styled.div({
  width : 49,
  marginRight : 10,
  flexShrink : 0,
  position : 'relative'
});

export const InformationContainer = styled.div({
  width : '100%',
  flexShrink : 1, 
  paddingBottom : 10
});

export const Content = styled.span({
  fontWeight : 400,
  fontSize : 15
})

export const Icon = styled.div({
  position : 'absolute',
  top : 0,
  right : 0
});