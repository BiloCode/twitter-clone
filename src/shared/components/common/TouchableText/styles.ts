import { colors } from "config/colors";
import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 1em 1.5em;
  color: ${colors.skyblue};
  background-color: #fff;
  text-align: left;
  font-size: 15px;

  &.center {
    text-align: center;
  }

  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;
