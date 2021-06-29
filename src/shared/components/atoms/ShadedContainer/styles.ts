import styled from 'styled-components';
import { TProps } from '.';

export const Container = styled.div<TProps>(({ horizontalSize }) => ({
  width: horizontalSize,
  backgroundColor: '#fff',
  boxShadow:
    'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px',
  borderRadius: 15,
}));
