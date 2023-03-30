import styled from 'styled-components';

export const Track = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 364px;
  background: rgba(0, 0, 0, 0.44);
`;
export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 1250px;
  height: 100%;
`;
export const BgBox = styled.div`
  z-index: -1;
  position: absolute;
  background: rgba(103, 101, 113, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  @media screen and (min-width: 1400px) {
    width: 1340px;
    height: 300px;
  }
`;

export const FilmItem = styled.div``;

export const Poster = styled.img`
  width: 174px;
  height: 261px;
  &:hover {
    cursor: pointer;
    /* scale: 1.1; */
    border: 2px solid rgba(123, 196, 219, 0.85);
  }
`;
