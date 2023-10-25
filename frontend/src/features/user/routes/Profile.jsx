import { PostForm } from 'features/post';
import { Wrapper } from './Profile.style';
import { ProfileForm } from '../components';

export const Profile = () => {
  return (
    <Wrapper>
      <PostForm />
      <ProfileForm />
    </Wrapper>
  );
};
