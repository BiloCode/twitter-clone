import styled from 'styled-components';

export const RootContainer = styled.div({
  width: 300,
  position: 'absolute',
  zIndex: 2,
  left: 0,
  right: 0,
  transform: 'translateY(calc(-100% - 70px))',
});

export const Container = styled.div({
  width: '100%',
  padding: '10px 0',
});
