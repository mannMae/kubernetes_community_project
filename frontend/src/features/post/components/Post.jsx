import { Button } from 'components/Elements';
import {
  Buttons,
  ClearImageButton,
  Content,
  ErrorMessage,
  FormFooter,
  FormInner,
  Header,
  Inner,
  PostImage,
  PostImageWrapper,
  PostInfomation,
  ProfileImage,
  Wrapper,
} from './Post.style';
import { BsPencilSquare } from 'react-icons/bs';

import { ImBin } from 'react-icons/im';
import { deletePost } from '../api/deletePost';
import { useEffect, useState } from 'react';
import { Form, ImageInputField, TextareaField } from 'components/Form';
import { updatePost } from '../api/updatePost';

export const Post = ({ id, content, createdAt, isMine, imageUrl, user }) => {
  const [image, setImage] = useState();

  const [isEditable, setIsEditable] = useState(false);
  const [firebaseError, setFirebaseError] = useState('');

  useEffect(() => {
    setImage(imageUrl);
  }, [isEditable]);

  return (
    <Wrapper>
      <ProfileImage src={user.photoURL} />
      <Inner>
        <Header>
          <PostInfomation>
            {user?.displayName} {user?.email}
          </PostInfomation>
          {isMine && (
            <Buttons>
              <Button
                backgroundcolor="white"
                padding="0"
                endIcon={<BsPencilSquare />}
                onClick={() => setIsEditable((prev) => !prev)}
              />
              <Button
                backgroundcolor="white"
                padding="0"
                endIcon={<ImBin />}
                onClick={() =>
                  deletePost({ postId: id, imageUrl, userId: user.id })
                }
              />
            </Buttons>
          )}
        </Header>
        {isEditable ? (
          <Form
            onSubmit={async (values) => {
              try {
                await updatePost({
                  postId: id,
                  content: values.content,
                  image,
                  userId: user.id,
                  prevImageUrl: imageUrl,
                });
                setIsEditable(false);
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
                    defaultvalue={content}
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
                  {!isEditable && <PostImage src={imageUrl} />}
                  <FormFooter>
                    <ImageInputField
                      size={'16'}
                      setImage={setImage}
                      error={formState.errors['image']}
                      registration={register('image')}
                    />
                    <Button>수정하기</Button>
                  </FormFooter>
                </FormInner>
              );
            }}
          </Form>
        ) : (
          <>
            <Content>{content}</Content>
            {imageUrl && <PostImage src={imageUrl} />}
          </>
        )}
      </Inner>
    </Wrapper>
  );
};
