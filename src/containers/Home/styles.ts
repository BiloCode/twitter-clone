import styled from "styled-components";

export const ContainerTweets = styled.div({
  height : 'calc(100vh - 53px)',
  overflowY : 'auto',
  '::-webkit-scrollbar' : {
    display : 'none'
  }
})