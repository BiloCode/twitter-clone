import styled from 'styled-components';

import { colors } from '@style-config/colors';

export const Container = styled.span`
  display: inline-block;
  line-height: 0;
  color: ${colors.textLight};

  &.small {
    font-size: 0.9em;
  }

  &.small_medium {
    font-size: 1.1em;
  }

  &.medium {
    font-size: 1.4em;
  }

  &.big {
    font-size: 2.4em;
  }

  &.extra_big {
    font-size: 5em;
  }
`;
