import styled from 'styled-components';

export const BottomContent = styled.div`
  padding: 1em;
  display: grid;
  row-gap: 1em;
`;

export const ProfileImageContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  border: 4px solid #fff;
  border-radius: 50%;
`;

export const UserCreateData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1em;
`;

export const ButtonsContainer = styled.div({
  height: 49,
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'relative',
  lineHeight: 0,
});
