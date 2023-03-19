import { StyledLink } from 'components/header/Header.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './Header.styled';
export const Header = () => {
  return (
    <>
      <header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
