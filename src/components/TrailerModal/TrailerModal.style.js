import styled from 'styled-components';

export const Modal = styled.div`
  background: rgba(103, 101, 113, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  width: 920px;
  height: 800px;
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
  z-index: 2;
  padding: 10px;
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: #64b6d0;
  border-radius: 50px;
  border: none;
`;
export const Frame = styled.iframe`
  display: block;
  margin: 0 auto;
`;
