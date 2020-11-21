import { colors } from "config/colors";
import styled from "styled-components";

export const Title = styled.div({
  fontWeight : 800,
  fontSize: 15
});

interface IContainerProps {
  isFollower? : boolean;
}

const size = 39;

export const Container = styled.div<IContainerProps>(({ isFollower }) => ({
  height : size,
  padding : '0 15px',
  backgroundColor : isFollower ? colors.skyblue : '#fff',
  borderWidth : 1,
  borderStyle : 'solid',
  borderColor : colors.skyblue,
  borderRadius : size / 2,
  display : 'flex',
  alignItems : 'center',
  cursor : 'pointer',
  userSelect : 'none',
  transition : '.2s',
  [Title] : {
    color : isFollower ? '#fff' : colors.skyblue
  },
  ':hover' : {
    backgroundColor : isFollower ? colors.red : colors.skyblueSmooth,
    borderColor : isFollower ? colors.red : colors.skyblue
  },
  ':active' : {
    backgroundColor : isFollower ? colors.redDarken : colors.skyblueSmooth2
  }
}));