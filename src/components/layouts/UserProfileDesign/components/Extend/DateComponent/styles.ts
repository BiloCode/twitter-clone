import { colors } from "config/colors";
import styled from "styled-components";

//Date
export const Container = styled.div({
  display : 'flex',
  marginBottom : 10
});

export const Icon = styled.div({
  color : colors.textLight,
  lineHeight : 0,
  marginRight : 5
})

export const Text = styled.span({
  color : colors.textLight,
  fontSize : 15
});