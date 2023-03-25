import { BurgerIco, StyledLink } from 'components/header/Header.styled';
import React from 'react';
import { Wrapper } from './BurgerMenu.styled';

export const BurgerMenu = ({ toggleClose }) => {
  return (
    <Wrapper>
      <BurgerIco
        onClick={() => {
          toggleClose();
        }}
      />
      <StyledLink to="/movies">Movie</StyledLink>
      <StyledLink to="/">LogIn</StyledLink>
    </Wrapper>
  );
};
