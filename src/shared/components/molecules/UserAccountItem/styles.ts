import styled from 'styled-components';

import { colors } from '@style-config/colors';

const size = 22;

export const Container = styled.div({
  padding: '10px 15px',
  cursor: 'pointer',
  borderBottom: '1px solid rgb(230,230,230)',
  userSelect: 'none',
  backgroundColor: '#fff',
});

export const AuthenticatedAccountContainer = styled.div({
  width: size,
  height: size,
  color: colors.skyblue,
  lineHeight: 0,
  fontSize: '1.3em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const NotificationsContainer = styled.div({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: colors.skyblue,
  textAlign: 'center',
});

export const NotificationsText = styled.span({
  fontSize: 13,
  color: '#fff',
  fontWeight: 'bold',
});
