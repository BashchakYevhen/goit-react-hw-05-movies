import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrLogin } from 'react-icons/gr';

export const Nav = styled.nav`
  position: absolute;
  left: 50%;
  top: 10px;
  z-index: 1;
  transform: translate(-50%);
  width: 100%;
  height: 97px;
  padding: 5px 15px;
  display: flex;
  gap: 33px;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.44);

  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
`;
export const StyledLink = styled(NavLink)`
  margin-right: 15px;
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
export const StyledLinkTab = styled(NavLink)`
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
export const BurgerIco = styled(GiHamburgerMenu)`
  height: 30px;
  width: 30px;
  color: #fff;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const LoginIco = styled(GrLogin)`
  width: 40px;
  height: 40px;
  & path {
    stroke: #fff;
  }
`;
export const LoginFormBox = styled.div`
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 700px;
  background-color: #fff;
`;
