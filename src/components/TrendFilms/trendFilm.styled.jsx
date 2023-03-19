import styled from 'styled-components';

export const Track = styled.div`
  /* position: absolute; */
  /* bottom: 21px; */
  /* left: 50%; */
  /* transform: translate(-50%); */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1403px;
  height: 364px;
  background: rgba(0, 0, 0, 0.44);
`;

export const TopList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding: 0 30px;
  width: 1314px;
  height: 327px;
  background: rgba(103, 101, 113, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  overflow-x: scroll;
  overflow-y: visible;

  /* hidden scroll-bar */
  -ms-overflow-x-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilmItem = styled.li`
  &:hover {
    scale: 1.1;
  }
`;

export const Poster = styled.img`
  width: 174px;
  height: 261px;
`;
