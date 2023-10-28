import { PostForm, PostList } from 'features/post';
import { Wrapper } from './Home.style';

export const Home = () => {
  return (
    <>
      <PostForm
        onSuccess={() => {
          console.log('success');
        }}
      />
      <PostList />
    </>
  );
};
