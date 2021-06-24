import styled from "styled-components";

export const Container = styled.div`
  --size: 48px;

  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: rgb(230, 230, 230);

  &.big {
    --size: 64px;
  }

  &.small {
    --size: 32px;
  }

  &.e-small {
    --size: 20px;
  }

  &.e-big {
    --size: 80px;
  }

  &.ee-big {
    --size: 120px;
  }

  &.hoverable {
    & > img {
      cursor: pointer;
    }

    &:hover > img {
      filter: brightness(80%);
      transition: 0.3s;
    }
  }
`;
