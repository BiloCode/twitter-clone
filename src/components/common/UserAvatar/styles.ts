import styled from "styled-components";

export const Image = styled.img({
  width: 'inherit',
  height : 'inherit',
  borderRadius : 'inherit',
  objectFit : 'cover',
  transition : '.2s',
  border: '1px solid rgb(230,230,230)'
});

interface IContainerProps {
  containerSize : number;
  hoverable? : boolean;
}

export const Container = styled.div<IContainerProps>(({ containerSize , hoverable }) => ({
  width: containerSize,
  height: containerSize,
  borderRadius : '50%',
  backgroundColor : 'rgb(230,230,230)',
  [Image] : {
    cursor: 'pointer',
    ':hover' : {
      filter : !hoverable ? 'none' : 'brightness(80%)'
    }
  }
}));
