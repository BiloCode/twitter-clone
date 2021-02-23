import styled from "styled-components";
import { TProps }  from '.';

export const Container = styled.div<TProps>(({ horizontalSize }) => ({
  width : horizontalSize,
  backgroundColor : '#fff',
  boxShadow : '3px 3px 5px rgb(230,230,230) , -3px 0 5px rgb(230,230,230)',
  borderRadius : 15
}));