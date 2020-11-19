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
}

export const Container = styled.div<IContainerProps>(({ containerSize , hoverable }) => ({
  width: containerSize,
  height: containerSize,
  borderRadius : '50%',
  backgroundColor : 'rgb(230,230,230)',
  border: '3px solid #fff',
  [Image] : {
    cursor: 'pointer',
    ':hover' : {
      filter : !hoverable ? 'none' : 'brightness(80%)'
    }
  }
}));
