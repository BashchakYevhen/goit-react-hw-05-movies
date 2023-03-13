import styled from 'styled-components';

export const Title = styled.h1`
  /* text-align: center; */
`;
export const List = styled.ul`
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 10px;
  margin-left: 100px;
  max-width: 1450px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  /* hidden scroll-bar */
  -ms-overflow-x-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & a {
    scroll-snap-align: start;
  }
`;
