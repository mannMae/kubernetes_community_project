import { Form, TextareaField } from 'components/Form';
import {
  Buttons,
  ErrorMessage,
  FormInner,
  GrapicButtons,
  ProfileImage,
  Wrapper,
} from './PostForm.style';
import { Button } from 'components/Elements';
import { useState } from 'react';
import { createPost } from '../api/createPost';
import { useSelector } from 'react-redux';

export const PostForm = ({ onSuccess }) => {
  const [firebaseError, setFirebaseError] = useState('');

  const auth = useSelector(({ auth }) => auth);
  console.log(auth);
  return (
    <Wrapper>
      <ProfileImage src={auth?.credential && auth.credential.user.photoURL} />
      <Form
        onSubmit={async (values) => {
          try {
            await createPost({
              content: values.content,
              userId: auth.credential.user.uid,
            });
            onSuccess();
          } catch (error) {
            setFirebaseError(error.content);
          }
        }}
      >
        {({ register, formState }) => {
          return (
            <FormInner>
              <TextareaField
                type="text"
                error={formState.errors['content']}
                registration={register('content')}
              />
              <ErrorMessage>{firebaseError}</ErrorMessage>
              <Buttons>
                <GrapicButtons>
                  <Button />
                  <Button />
                </GrapicButtons>
                <Button>작성하기</Button>
              </Buttons>
            </FormInner>
          );
        }}
      </Form>
    </Wrapper>
  );
};
