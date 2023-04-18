import { Button } from 'components/moviePreview/moviePreview.style';
import React, { useState } from 'react';

import { Form } from './LoginForm.styled';

function LoginForm() {
  const [formReturn, setFormReturn] = useState(true);

  const handleChange = () => {
    setFormReturn(!formReturn);
  };
  return formReturn ? (
    <Form>
      <label>
        Email
        <input />
      </label>
      <label>
        Password
        <input />
      </label>
      <Button type={'submit'}>Login</Button>
      <br />
      <span>OR</span>
      <br />{' '}
      <Button type={'button'} onClick={handleChange}>
        Register
      </Button>
    </Form>
  ) : (
    <Form>
      <label>
        Email
        <input />
      </label>
      <label>
        Nickname
        <input />
      </label>
      <label>
        Password
        <input />
      </label>
      <Button type={'submit'}>Register</Button>
      <br />
      <span>OR</span>
      <br />{' '}
      <Button type={'button'} onClick={handleChange}>
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
