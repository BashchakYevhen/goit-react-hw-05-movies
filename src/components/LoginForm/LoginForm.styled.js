import styled from 'styled-components';

export const BgForm = styled.div`
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
  width: 690px;
  height: 690px;
  background: rgba(100, 182, 208, 0.5);
  backdrop-filter: blur(12.5px);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 503px;
  height: 595px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ABeeZee;
  font-style: normal;
  font-weight: 400;
`;
export const Input = styled.input`
  width: 500px;
  height: 50px;

  background: #ffffff;
  border: 1px solid #bcbec0;
  border-radius: 10px;
`;
export const ModalXButton = styled.button`
  position: absolute;
  top: 35px;
  right: 35px;
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
export const Label = styled.label`
  margin-bottom: 10px;
  color: #fff;
`;
export const AuthButton = styled.button`
  width: 500px;
  height: 50px;
  background: #64b6d0;
  border-radius: 10px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
