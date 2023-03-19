import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: absolute;
  left: 50%;
  top: 10px;
  z-index: 1;
  transform: translate(-50%);
  width: 1403px;
  height: 97px;
  padding: 5px 15px;
  display: flex;
  gap: 33px;
  align-items: center;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.44);
`;
export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  &.active {
    text-decoration: underline;
  }
`;
