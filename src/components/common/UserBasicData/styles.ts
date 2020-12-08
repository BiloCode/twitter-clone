import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div({
  display : 'flex',
  justifyContent: 'space-between'
});

export const UserDataContainer = styled.div({
  display: 'flex',
});

//User Text
export const TextContainer = styled.div({
  display : 'flex',
  justifyContent : 'center',
  flexDirection : 'column',
  paddingLeft: 10
});

export const Nickname = styled.span({
  fontSize : 15,
  fontWeight : 'bold',
});

export const Username = styled.span({
  fontSize : 15,
  color : colors.textLight,
  fontWeight : 400,
});

export const ChildrenContainer = styled.div({
  display: 'flex',
  justifyContent : 'center',
  alignItems : 'center'
});