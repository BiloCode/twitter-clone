import styled from 'styled-components';

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

export const UserDataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 10px;
  align-items: center;
`;

export const ChildrenContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
