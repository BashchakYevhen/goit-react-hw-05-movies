import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
export const Box = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
