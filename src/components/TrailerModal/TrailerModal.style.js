import styled from 'styled-components';

export const Modal = styled.div`
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(103, 101, 113, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  width: 720px;
  height: 480px;
`;

export const Button = styled.button`
  position: absolute;
  top: -35px;
  right: -35px;
  width: 30px;
  height: 30px;
  background: rgba(100, 182, 208, 0.5);
  border-radius: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background: rgba(100, 182, 208, 1);
  }
`;
export const Frame = styled.iframe`
  display: block;
  margin: 0 auto;
`;
