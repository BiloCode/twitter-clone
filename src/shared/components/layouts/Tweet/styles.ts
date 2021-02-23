import styled from "styled-components";

export const TweetContainer = styled.article({
  padding : '0 15px',
  position : 'relative',
  borderBottom : '1px solid rgb(230,230,230)',
  cursor : "pointer"
});

export const Container = styled.div({
  paddingTop : 10,
  display : 'flex',
  alignItems: 'flex-start'
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
  fontSize : 15,
  marginTop: 3,
  display: "inline-block"
})

export const Icon = styled.div({
  position : 'absolute',
  top : 0,
  right : 0
});