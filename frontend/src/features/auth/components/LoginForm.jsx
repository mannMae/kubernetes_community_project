import { Form, InputField } from 'components/Form';
import {
  ButtonLogo,
  ErrorMessage,
  FormInner,
  Wrapper,
} from './LoginForm.style';
import { Button } from 'components/Elements';

import GoogleLogo from 'assets/images/google_logo.png';
import GithubLogo from 'assets/images/github_logo.png';
import {
  loginWithEmailAndPassword,
  loginWithGithub,
  loginWithGoogle,
} from '../api/login';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const LoginForm = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState('');

  return (
    <Wrapper>
      <Form
        onSubmit={async (values) => {
          try {
            await loginWithEmailAndPassword({
              email: values.email,
              password: values.password,
            });
            onSuccess();
          } catch (error) {
            setFirebaseError(error.message);
          }
        }}
      >
        {({ register, formState }) => {
          return (
            <FormInner>
              <InputField
                type="email"
                label="이메일"
                error={formState.errors['email']}
                registration={register('email')}
              />
              <InputField
                type="password"
                label="비밀번호"
                error={formState.errors['password']}
                registration={register('password')}
              />
              <ErrorMessage>{firebaseError}</ErrorMessage>
              <Button>로그인</Button>
            </FormInner>
          );
        }}
      </Form>
      <Button
        bordercolor="lightGray"
        backgroundcolor="white"
        fontcolor="black"
        endIcon={<ButtonLogo src={GoogleLogo} />}
        onClick={() => loginWithGoogle().then(() => navigate('/'))}
      >
        구글 계정으로 로그인
      </Button>
      <Button
        backgroundcolor="#333"
        endIcon={<ButtonLogo src={GithubLogo} />}
        onClick={() => loginWithGithub().then(() => navigate('/'))}
      >
        깃허브 계정으로 로그인
      </Button>
      <Button onClick={() => navigate('../register')}>쿠버즈 회원가입</Button>
    </Wrapper>
  );
};
