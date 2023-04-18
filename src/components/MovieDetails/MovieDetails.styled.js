import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 107px;
  @media screen and (min-width: 1400px) {
    display: flex;
    width: 1400px;
    height: 100%;
    margin: 107px auto 0;
    padding: 20px;
    background: rgba(103, 101, 113, 0.34);
    border: 1px solid rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(10px);
    font-family: ABeeZee;
    font-style: normal;
    font-weight: 400;
  }
`;
export const Poster = styled.img`
  width: 300px;
  height: 450px;
`;
export const InfoBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Title = styled.h1`
  margin-bottom: 30px;
`;
