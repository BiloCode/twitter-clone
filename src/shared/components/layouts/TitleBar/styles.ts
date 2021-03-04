import styled from "styled-components";
import { colors } from "config/colors";

interface IContainerProps {
  spaceBetween?: boolean;
  activeBorder?: boolean;
  padding?: string;
}

export const Container = styled.div<IContainerProps>((props) => ({
  width: "100%",
  padding: props.padding ? props.padding : "5px 15px",
  display: "flex",
  justifyContent: props.spaceBetween ? "space-between" : "flex-start",
  alignItems: "center",
  borderBottom: props.activeBorder ? "1px solid rgb(230,230,230)" : "none",
  userSelect: "none",
}));

export const Title = styled.span({
  fontSize: 19,
  fontWeight: 800,
});

export const Subtitle = styled.span({
  fontSize: 13,
  fontWeight: 400,
  color: colors.textLight,
});
