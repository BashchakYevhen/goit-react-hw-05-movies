import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 1;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 5px;
  border-bottom: 2px solid grey;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.44);
`;
export const StyledLink = styled(NavLink)`
  color: #fff;
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
