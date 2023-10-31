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
import { useDispatch } from 'react-redux';
import { authSlice } from '../slice';

export const LoginForm = ({ onSuccess }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firebaseError, setFirebaseError] = useState('');

  return (
    <Wrapper>
      <Form
        onSubmit={async (values) => {
          try {
            await loginWithEmailAndPassword({
              email: values.email,
              password: values.password,
            })
              .then((res) => {
                dispatch(authSlice.actions.updateUser({ ...res }));
              })
              .catch((error) => console.error(error));

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
        onClick={() =>
          loginWithGoogle()
            .then((res) => {
              dispatch(authSlice.actions.updateUser({ ...res }));
            })
            .then(() => navigate('/'))
            .catch((error) => console.error(error))
        }
      >
        구글 계정으로 로그인
      </Button>
      <Button
        backgroundcolor="#333"
        endIcon={<ButtonLogo src={GithubLogo} />}
        onClick={() =>
          loginWithGithub()
            .then((res) => {
              dispatch(authSlice.actions.updateUser({ ...res }));
            })
            .then(() => navigate('/'))
            .catch((error) => console.error(error))
        }
      >
        깃허브 계정으로 로그인
      </Button>
      <Button onClick={() => navigate('../register')}>
        하이클레프 회원가입
      </Button>
    </Wrapper>
  );
};
