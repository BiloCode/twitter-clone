import styled from 'styled-components';

type ContainerType = {
  isBig?: boolean;
};

export const Container = styled.div<ContainerType>`
  width: 100%;
  max-width: ${({ isBig }) => (isBig ? 'initial' : '425px')};
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
