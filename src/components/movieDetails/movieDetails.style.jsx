import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.44);
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 30px 15px 30px;
  width: 50%;
  height: 490px;
`;

export const TitleFilm = styled.h2`
  margin-bottom: 20px;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 90px;
`;
export const Title = styled.h3`
  margin-bottom: 10px;
`;
export const StyledLink = styled(NavLink)`
  position: relative;
  color: #000;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  margin-top: 20px;
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  &.active {
    text-decoration: underline;
  }
`;
export const Text = styled.p`
  margin-bottom: 10px;
`;
