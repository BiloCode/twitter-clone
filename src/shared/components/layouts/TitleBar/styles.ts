import styled from "styled-components";
import { colors } from "config/colors";

export type ContainerStylesType = {
  padding?: string;
  // sticky?: boolean;
  activeBorder?: boolean;
};

type IContainerProps = ContainerStylesType & {
  spaceBetween?: boolean;
};

export const Container = styled.div<IContainerProps>`
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : "5px 15px")};

  display: flex;
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? "space-between" : "flex-start"};
  align-items: center;
  border-bottom: ${({ activeBorder }) =>
    activeBorder ? "1px solid rgb(230,230,230)" : "none"};
  user-select: none;
`;

Container.defaultProps = {
  activeBorder: true,
};

export const Title = styled.span({
  fontSize: 19,
  fontWeight: 800,
});

export const Subtitle = styled.span({
  fontSize: 13,
  fontWeight: 400,
  color: colors.textLight,
});
