import { BurgerMenu } from 'components/Burger/Burger-menu';
import { Suspense, useState } from 'react';
import { createPortal } from 'react-dom';
import { SiThemoviedatabase } from 'react-icons/si';
import { IoSearch } from 'react-icons/io5';
import { Outlet } from 'react-router-dom';
import {
  BurgerIco,
  StyledLink,
  StyledLinkTab,
  Nav,
} from 'components/header/Header.styled';

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
          <SiThemoviedatabase
            style={{
              width: '50px',
              height: '50px',
              color: '#fff',
            }}
          />
          <StyledLinkTab to="/movies">
            <IoSearch />
          </StyledLinkTab>
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
