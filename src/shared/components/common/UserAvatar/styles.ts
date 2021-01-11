import styled from "styled-components";

export const Image = styled.img({
  width: '100%',
  height : '100%',
  borderRadius : 'inherit',
  objectFit : 'cover',
  transition : '.2s',
});

interface IContainerProps {
  containerSize : number;
  hoverable? : boolean;
  borderWidth? : number;
}

export const Container = styled.div<IContainerProps>(({ containerSize , hoverable , borderWidth }) => ({
  width: containerSize,
  height: containerSize,
  borderRadius : '50%',
  backgroundColor : 'rgb(230,230,230)',
  borderWidth : borderWidth || 1,
  borderColor : '#fff',
  borderStyle : 'solid',
  [Image] : {
    cursor: 'pointer',
    ':hover' : {
      filter : !hoverable ? 'none' : 'brightness(80%)'
    }
  }
}));
