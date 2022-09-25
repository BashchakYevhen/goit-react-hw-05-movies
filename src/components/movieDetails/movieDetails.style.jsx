import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  margin: 10px 0;
`;
export const Poster = styled.img`
  height: 500px;
  max-width: 400px;
  margin-right: 10px;
`;
export const FilmInfo = styled.div`
  width: 900px;
`;
export const Title = styled.h3`
  margin-bottom: 5px;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  margin-top: 20px;
  background-color: #03a9f4;
  &.active {
    background-color: #f3cb49;
  }
`;
