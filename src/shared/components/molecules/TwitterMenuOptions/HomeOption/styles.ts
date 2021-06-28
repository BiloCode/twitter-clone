import styled from "styled-components";
import { colors } from "@style-config/colors";

const size = 7;

export const IndicatorContainer = styled.div({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: colors.skyblue,
  position: "absolute",
  top: 0,
  right: 0,
});
