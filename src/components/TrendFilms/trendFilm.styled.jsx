import styled from 'styled-components';

export const Track = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 1403px; */
  height: 364px;
  background: rgba(0, 0, 0, 0.44);
`;
export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 1250px;
  height: 100%;
  overflow-x: scroll;
  overflow-y: visible;

  /* hidden scroll-bar */
  -ms-overflow-x-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const BgBox = styled.div`
  z-index: -1;
  position: absolute;
  width: 1340px;
  height: 300px;
  background: rgba(103, 101, 113, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
`;
export const TopList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding: 0px;
`;

export const FilmItem = styled.li`
  &:hover {
    scale: 1.3;
    border: 4px solid rgba(123, 196, 219, 0.85);
  }
`;

export const Poster = styled.img`
  width: 174px;
  height: 261px;
`;
export const Button = styled.button`
  position: absolute;
  right: 40px;
  width: 32px;
  height: 32px;
  color: blue;
  background-color: red;
  border: none;
`;
