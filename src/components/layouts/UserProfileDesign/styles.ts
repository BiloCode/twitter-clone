import styled from "styled-components";

export const Container = styled.div({
  width : '100%'
});

export const BottomContent = styled.div({
  padding : '10px 15px 0 15px'
});

export const ButtonsContainer = styled.div({
  display : 'flex',
  justifyContent : 'flex-end',
  position : 'relative'
});

//Profile Props
interface IProfileContainerProps {
  size : number;
}

export const ProfileImageContainer = styled.div<IProfileContainerProps>(props => ({
  position : 'absolute',
  top : -(props.size / 2),
  left : 0
}));