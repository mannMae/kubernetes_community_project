import { Form, ImageInputField, TextareaField } from 'components/Form';
import {
  Buttons,
  ClearImageButton,
  ErrorMessage,
  FormInner,
  GrapicButtons,
  PostImage,
  PostImageWrapper,
  ProfileImage,
  Wrapper,
} from './PostForm.style';
import { Button } from 'components/Elements';
import { useEffect, useState } from 'react';
import { createPost } from '../api/createPost';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { LoginRequirement } from 'features/auth';

export const PostForm = ({ onSuccess }) => {
  const [firebaseError, setFirebaseError] = useState('');
  const [image, setImage] = useState();

  const auth = useSelector(({ auth }) => auth);

  const { resetField, reset } = useForm();

  console.log(auth.credential);

  useEffect(() => {
    reset({ content: '' });
  }, [image]);

  if (!auth?.credential) {
    return (
      <LoginRequirement describtion="게시글을 작성하려면 로그인이 필요합니다" />
    );
  }
  return (
    <Wrapper>
      <ProfileImage
        src={auth?.credential ? auth.credential.user.photoURL : null}
      />
      <Form
        onSubmit={async (values) => {
          try {
            await createPost({
              content: values.content,
              userId: auth.credential.user.uid,
              image,
            });
            reset();
            onSuccess();
            setImage(null);
          } catch (error) {
            setFirebaseError(error.content);
          }
        }}
      >
        {({ register, formState }) => {
          return (
            <FormInner>
              <TextareaField
                width="100%"
                type="text"
                defaultvalue=""
                error={formState.errors['content']}
                registration={register('content')}
              />
              {image && (
                <PostImageWrapper>
                  <PostImage src={image} />
                  <ClearImageButton onClick={() => setImage('')}>
                    ✕
                  </ClearImageButton>
                </PostImageWrapper>
              )}
              <ErrorMessage>{firebaseError}</ErrorMessage>
              <Buttons>
                <GrapicButtons>
                  <ImageInputField
                    size={'16'}
                    setImage={setImage}
                    error={formState.errors['image']}
                    registration={register('image')}
                  />
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
