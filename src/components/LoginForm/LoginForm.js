import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import {
  BgForm,
  Form,
  Input,
  ModalXButton,
  Label,
  AuthButton,
} from './LoginForm.styled';

function LoginForm({ toggleLogin }) {
  const [formReturn, setFormReturn] = useState(true);

  const handleChange = () => {
    setFormReturn(!formReturn);
  };
  return formReturn ? (
    <BgForm>
      <ModalXButton
        onClick={() => {
          toggleLogin();
        }}
      >
        <ImCross />
      </ModalXButton>
      <Form>
        <Label>
          Email
          <Input />
        </Label>
        <Label>
          Password
          <Input />
        </Label>
        <AuthButton type={'submit'}>Login</AuthButton>
        <br />
        <span>OR</span>
        <br />{' '}
        <AuthButton type={'button'} onClick={handleChange}>
          Register
        </AuthButton>
      </Form>
    </BgForm>
  ) : (
    <BgForm>
      <ModalXButton
        onClick={() => {
          toggleLogin();
        }}
      >
        <ImCross />
      </ModalXButton>
      <Form>
        <Label>
          Email
          <Input />
        </Label>
        <Label>
          Nickname
          <Input />
        </Label>
        <Label>
          Password
          <Input />
        </Label>
        <AuthButton type={'submit'}>Register</AuthButton>
        <br />
        <span>OR</span>
        <br />{' '}
        <AuthButton type={'button'} onClick={handleChange}>
          Login
        </AuthButton>
      </Form>
    </BgForm>
  );
}

export default LoginForm;
