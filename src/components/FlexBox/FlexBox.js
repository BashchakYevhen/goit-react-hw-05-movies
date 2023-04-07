import styled from 'styled-components';
import React from 'react';

export const FlexBox = ({ children }) => {
  return <FlexBoxStyled>{children}</FlexBoxStyled>;
};

const FlexBoxStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
