import styled from "styled-components";
import { colors } from "@style-config/colors";

export const ItemContainer = styled.div({
  width: "max-content",
  display: "flex",
  alignItems: "center",
  padding: 10,
  borderRadius: 28,
});

export const IconContainer = styled.div({
  fontSize: 28,
  lineHeight: 0,
  position: "relative",
});

export const TextContainer = styled.div({
  margin: "0 15px",
});

export const Text = styled.span({
  fontSize: 19,
  fontWeight: "bold",
});

interface MainContainerProps {
  isSelect?: boolean;
}

export const MainContainer = styled.div<MainContainerProps>(({ isSelect }) => ({
  height: 60,
  display: "flex",
  alignItems: "center",
  padding: "7px 0",
  [`${IconContainer} , ${TextContainer}`]: {
    color: isSelect ? colors.skyblue : "black",
  },
  ":hover": {
    cursor: "pointer",
    [ItemContainer]: {
      backgroundColor: colors.skyblueSmooth,
    },
    [`${IconContainer} , ${TextContainer}`]: {
      color: colors.skyblue,
    },
  },
}));
