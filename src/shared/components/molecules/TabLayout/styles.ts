import { colors } from '@style-config/colors';
import styled from 'styled-components';

type TContainer = {
  colums: number;
};

export const Container = styled.div<TContainer>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.colums}, 1fr);
  border-bottom: 2px solid rgb(230, 230, 230);
`;

export const TabContainer = styled.button`
  width: 100%;
  height: 52px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.textLight};
  cursor: pointer;

  &.selected {
    border-bottom: 2px solid ${colors.skyblue};
    color: ${colors.skyblue};
  }

  &:hover {
    background-color: ${colors.skyblueSmooth};
    color: ${colors.skyblue};
  }
`;
