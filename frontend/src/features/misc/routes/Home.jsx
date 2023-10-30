import { PostForm, PostList, getRealtimePosts } from 'features/post';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [postlist, setPostList] = useState([]);

  useEffect(() => {
    getRealtimePosts(setPostList);
  }, []);
  return (
    <>
      <PostForm
        onSuccess={() => {
          console.log('success');
        }}
      />
      <PostList postlist={postlist} />
    </>
  );
};
