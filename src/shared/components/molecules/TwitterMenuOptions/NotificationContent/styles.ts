import { colors } from "@style-config/colors";
import styled from "styled-components";

const size = 18;

export const IndicatorContainer = styled.div({
  width: size,
  height: size,
  backgroundColor: colors.skyblue,
  borderRadius: size / 2,
  position: "absolute",
  top: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 11,
  color: "#fff",
  border: "1px solid #fff",
});
