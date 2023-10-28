import { Form, ImageInputField, InputField } from 'components/Form';
import {
  Contents,
  CreatedAt,
  Email,
  FormInner,
  ProfileImage,
  Wrapper,
} from './ProfileForm.style';
import { Button } from 'components/Elements';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../api/updateProfile';
import { authSlice } from 'features/auth';
import { getDate } from 'util/getDate';

export const ProfileForm = ({ onSuccess }) => {
  const [firebaseError, setFirebaseError] = useState('');
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const auth = useSelector(({ auth }) => auth);
  const [profileImage, setProfileImage] = useState(
    auth && auth?.credential?.user.photoURL
  );

  const createdAt = getDate({
    ms: parseInt(auth.credential.user.metadata.createdAt, 10),
  });

  return (
    <Wrapper>
      <Form
        onSubmit={async (values) => {
          try {
            await updateUser({
              user: auth?.credential?.user,
              image,
              nickname: values.nickname,
            });

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
              <ImageInputField
                label={<ProfileImage src={image ? image : profileImage} />}
                setImage={setImage}
                error={formState.errors['image']}
                registration={register('image')}
              />
              <Contents>
                <InputField
                  placeholder="닉네임을 등록하세요"
                  type="text"
                  defaultvalue={auth?.credential?.user?.displayName}
                  error={formState.errors['nickname']}
                  registration={register('nickname')}
                />
                <Email>daga4242@gmail.com</Email>
                <CreatedAt>가입일자 : {createdAt}</CreatedAt>
              </Contents>
              <Button>프로필 수정</Button>
            </FormInner>
          );
        }}
      </Form>
    </Wrapper>
  );
};
