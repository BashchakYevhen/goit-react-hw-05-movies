import { Suspense, useState } from 'react';
import { createPortal } from 'react-dom';
import { SiThemoviedatabase } from 'react-icons/si';

import { Outlet } from 'react-router-dom';
import { BurgerMenu } from 'components/Burger/Burger-menu';
import {
  BurgerIco,
  StyledLink,
  StyledLinkTab,
  Nav,
  LoginIco,
} from 'components/header/Header.styled';
import { BackDrop } from 'components/BackDrop/BackDrop';
import LoginForm from 'components/LoginForm/LoginForm';

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleClose = () => {
    setIsOpened(!isOpened);
  };
  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <>
      <header>
        <Nav>
          <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLinkTab to={`/movies`}>Search</StyledLinkTab>
          </div>
          <SiThemoviedatabase
            style={{
              width: '50px',
              height: '50px',
              color: '#fff',
            }}
          />
          <div onClick={toggleLogin}>
            <LoginIco />
          </div>
        </Nav>
      </header>
      {isLoginOpen &&
        createPortal(
          <BackDrop>
            <LoginForm toggleLogin={toggleLogin} />
          </BackDrop>,
          document.getElementById('modal')
        )}
      {isOpened ? (
        createPortal(
          <BurgerMenu toggleClose={toggleClose} />,
          document.getElementById('modal')
        )
      ) : (
        <BurgerIco onClick={toggleClose} />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
