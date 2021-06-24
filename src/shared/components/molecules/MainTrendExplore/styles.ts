import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 340px;
  position: relative;
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerTextContent = styled.div`
  width: 100%;
  display: grid;
  row-gap: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1em;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
`;

export const Title = styled.span`
  font-size: 23px;
  font-weight: 900;
  color: #fff;

  &::first-letter {
    text-transform: uppercase;
  }
`;
