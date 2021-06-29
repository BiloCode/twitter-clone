import styled from 'styled-components';

export const MainText = styled.span`
  font-size: 18px;
  font-weight: bold;

  &.hoverable:hover {
    text-decoration: underline;
  }

  &.black-big,
  &.black-medium,
  &.black-small,
  &.black {
    font-weight: 900;
  }

  &.black-medium {
    font-size: 20px;
  }

  &.black-small {
    font-size: 16px;
  }

  &.small {
    font-size: 15px;
  }
`;
