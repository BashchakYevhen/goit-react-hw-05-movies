import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
