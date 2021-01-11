import styled from "styled-components";
import { colors } from "config/colors";

export const Container = styled.div({
  width: 250,
  margin: '10px 0',
  padding: 10,
  borderRadius: 30,
  cursor: 'pointer',
  userSelect : 'none',
  position: 'relative',
  ':hover' : {
    backgroundColor : colors.skyblueSmooth
  },
  ':active' : {
    backgroundColor : colors.skyblueSmooth2
  }
});