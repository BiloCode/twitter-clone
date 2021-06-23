import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(600px, 600px) 1fr;
`;

export const LeftContainer = styled.div`
  width: 100%;
  border-right: 1px solid rgb(230, 230, 230);
`;

export const RightContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const AsideContent = styled.div`
  width: 350px;
  height: 100%;
`;

export const ScrollableContainer = styled.div`
  width: 350px;
`;
