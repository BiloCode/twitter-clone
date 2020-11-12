import styled from "styled-components";

export const Image = styled.img({
  width: 'inherit',
  height : 'inherit',
  borderRadius : 'inherit',
  objectFit : 'cover',
  transition : '.2s',
  border: '2px solid #fff'
});

interface IContainerProps {
  size : number;
  hoverable? : boolean;
}

export const Container = styled.div<IContainerProps>(({ size , hoverable }) => ({
  width: size,
  height: size,
  borderRadius : '50%',
  backgroundColor : 'rgb(230,230,230)',
  [Image] : {
    cursor: 'pointer',
    ':hover' : {
      filter : !hoverable ? 'none' : 'brightness(80%)'
    }
  }
}));
