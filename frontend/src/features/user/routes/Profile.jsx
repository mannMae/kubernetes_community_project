import { PostForm } from 'features/post';
import { Wrapper } from './Profile.style';
import { ProfileForm } from '../components';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <PostForm />
      <ProfileForm onSuccess={() => navigate('/')} />
    </Wrapper>
  );
};
