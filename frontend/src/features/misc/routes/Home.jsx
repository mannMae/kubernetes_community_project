import { PostForm, PostList } from 'features/post';
import { Wrapper } from './Home.style';

export const Home = () => {
  return (
    <Wrapper>
      <PostForm
        onSuccess={() => {
          console.log('success');
        }}
      />
      <PostList />
    </Wrapper>
  );
};
