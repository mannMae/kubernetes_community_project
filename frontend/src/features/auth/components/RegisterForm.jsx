import { Form, InputField } from 'components/Form';
import { ErrorMessage, FormInner, Wrapper } from './RegisterForm.style';
import { Button } from 'components/Elements';

import { useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../api/register';
import { useState } from 'react';

export const RegisterForm = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState('');
  return (
    <Wrapper>
      <Form
        onSubmit={async (values) => {
          try {
            await registerWithEmailAndPassword({
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
              <Button>회원가입</Button>
            </FormInner>
          );
        }}
      </Form>
      <Button onClick={() => navigate('../login')}>쿠버즈 로그인</Button>
    </Wrapper>
  );
};
