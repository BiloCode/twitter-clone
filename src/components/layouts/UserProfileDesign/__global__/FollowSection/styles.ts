import { colors } from "config/colors";
import styled from "styled-components";

export const ContainerText = styled.div({
  marginRight : 20,
  cursor : 'pointer',
  ':hover' : {
    textDecoration : 'underline'
  }
})

export const TextBold = styled.span({
  fontWeight : 700,
  marginRight : 5
});

export const TextLight = styled.span({
  color : colors.textLight,
});

export const Container = styled.div({
  display : 'flex',
  [`${TextBold} , ${TextLight}`] : {
    fontSize : 15
  }
});