import styled from 'styled-components';

export const FilmCard = styled.li`
  background-color: #00000059;
  @media (min-width: 768px) {
    display: flex;
    width: 1200px;
    height: 220px;
  }
`;
export const FilmImg = styled.img`
  height: 220px;
`;
export const FilmDataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  font-family: 'Oswald';
  font-size: 18px;
`;
export const OverviewText = styled.p`
  height: 160px;
  margin-top: 5px;
`;
