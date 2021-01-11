import styled from "styled-components";
import { colors } from "config/colors";

export const Container = styled.div({
  marginBottom : 10,
})

export const Nickname = styled.span({
  display : 'block',
  fontWeight : 800
});

export const Username = styled.span({
  display : 'block',
  fontWeight : 400,
  fontSize : 15,
  color : colors.textLight
});

export const Description = styled.p({
  display : 'block',
  fontSize : 15
});

interface IPersonalInformationProps {
  isModal? : boolean;
}

export const ContainerUserText = styled.div<IPersonalInformationProps>(props => ({
  marginTop : 5,
  marginBottom : 10,
  [Nickname] : {
    fontSize : !props.isModal ? 19 : 15
  }
}));