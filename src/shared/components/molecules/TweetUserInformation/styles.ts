import styled from "styled-components";
import { colors } from "config/colors";

export const Container = styled.div({
  display: "flex",
  alignItems: "center",
});

export const Nickname = styled.span({
  fontWeight: 700,
  color: "black",
  fontSize: 15,
});

export const Username = styled.span({
  fontWeight: 400,
  color: colors.textLight,
  fontSize: 15,
  marginLeft: 5,
});

export const UserInformationContainer = styled.div({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  position: "relative",
  [`:hover ${Nickname}`]: {
    textDecoration: "underline",
  },
});

export const Point = styled.div({
  padding: "0 5px",
  color: colors.textLight,
  fontSize: 15,
});

export const Time = styled.time`
  color: ${colors.textLight};
  font-size: 15px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;
