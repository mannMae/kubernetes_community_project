import { Button } from 'components/Elements';
import {
  Buttons,
  Content,
  ErrorMessage,
  FormFooter,
  FormInner,
  Header,
  PostImage,
  PostInfomation,
  Wrapper,
} from './Post.style';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';
import { deletePost } from '../api/deletePost';
import { useState } from 'react';
import { Form, TextareaField } from 'components/Form';
import { updatePost } from '../api/updatePost';

export const Post = ({ id, content, createdAt, isMine, imageUrl }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [firebaseError, setFirebaseError] = useState('');
  return (
    <Wrapper>
      <Header>
        <PostInfomation>USERNAME</PostInfomation>
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
              onClick={() => deletePost({ postId: id, imageUrl })}
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
                <ErrorMessage>{firebaseError}</ErrorMessage>
                {imageUrl && <PostImage src={imageUrl} />}
                <FormFooter>
                  <AiOutlineHeart />
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
    </Wrapper>
  );
};
