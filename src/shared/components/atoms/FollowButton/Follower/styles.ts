import styled from 'styled-components';

import { colors } from '@style-config/colors';
import { TwitterText, TwitterContainer } from '../../TwitterButton';

export const FollowerTitle = styled(TwitterText)``;
export const FollowerButton = styled(TwitterContainer)`
  background-color: ${colors.skyblue};

  ${FollowerTitle} {
    color: #fff;
  }

  &:hover {
    background-color: ${colors.red};
    border-color: ${colors.red};
  }

  &:active {
    background-color: ${colors.redDarken};
  }
`;
