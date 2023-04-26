import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmCard = styled.li`
  background-color: #fff;
  @media (min-width: 768px) {
    display: flex;
    width: 1200px;
    height: 220px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
  }
  &:hover {
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.19), 0 6px 6px;
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
export const StyledLink = styled(Link)`
  color: #222;
  text-decoration: none;
`;
