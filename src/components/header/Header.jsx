import { BurgerMenu } from 'components/Burger/Burger-menu';
import {
  BurgerIco,
  StyledLink,
  StyledLinkTab,
} from 'components/header/Header.styled';
import { Suspense, useState } from 'react';
import { createPortal } from 'react-dom';

import { Outlet } from 'react-router-dom';
import { Nav } from './Header.styled';

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleClose = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLinkTab to="/movies">Movies</StyledLinkTab>
          {isOpened ? (
            createPortal(
              <BurgerMenu toggleClose={toggleClose} />,
              document.getElementById('modal')
            )
          ) : (
            <BurgerIco onClick={toggleClose} />
          )}
        </Nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
