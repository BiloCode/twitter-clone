import styled from 'styled-components';

import { AVATAR_SIZE } from '@style-config/constants';

export const Container = styled.div`
  --size: ${AVATAR_SIZE.DEFAULT};

  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: rgb(230, 230, 230);

  &.big {
    --size: ${AVATAR_SIZE.BIG};
  }

  &.small {
    --size: ${AVATAR_SIZE.SMALL};
  }

  &.e-small {
    --size: ${AVATAR_SIZE.E_SMALL};
  }

  &.e-big {
    --size: ${AVATAR_SIZE.E_BIG};
  }

  &.ee-big {
    --size: ${AVATAR_SIZE.EE_BIG};
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
