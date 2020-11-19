import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div({
  width : '100%'
});

export const BottomContent = styled.div({
  marginBottom : 15,
  padding : '10px 15px 0 15px'
});

export const ButtonsContainer = styled.div({
  height : 49,
  display : 'flex',
  justifyContent : 'flex-end',
  position : 'relative',
  lineHeight : 0
});

//Profile 
export const ProfileImageContainer = styled.div({
  position : 'absolute',
  left : 0,
  bottom : 0
});

//Information
export const ContainerPersonalInformation = styled.div({
  marginTop : 5,
  marginBottom : 10
});

export const Nickname = styled.span({
  display : 'block',
  fontWeight : 800,
  fontSize : 19
});

export const Username = styled.span({
  display : 'block',
  fontWeight : 400,
  fontSize : 15,
  color : colors.textLight
});

export const Description = styled.p({
  display : 'block',
  marginBottom : 10,
  fontSize : 15
});

//Date
export const DateContainer = styled.div({
  display : 'flex',
  alignItems : 'flex-end',
  marginBottom : 10
});