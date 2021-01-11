import styled from "styled-components";
import { colors } from "../../../../config/colors";

export const Container = styled.button({
  width: 250,
  height: 50,
  backgroundColor : colors.skyblue,
  padding: '10px 0',
  borderRadius: 25,
  ':hover' : {
    backgroundColor : colors.skyblueDarken
  }
});

export const Text = styled.span({
  fontWeight: 'bold',
  color: '#fff',
  fontSize: 16
});