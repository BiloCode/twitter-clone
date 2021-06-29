import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: flex-start;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
`;

type HideIconFloatType = {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
};

export const HideIconFloat = styled.button<HideIconFloatType>`
  position: absolute;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  left: ${({ left }) => left}px;
  bottom: ${({ bottom }) => bottom}px;
  background-color: transparent;
`;

export const ReactionContent = styled.div`
  width: 35vw;
  margin: 0 auto;
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1em 0;
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  max-height: 80vh;
`;

export const RightContent = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fff;
`;
