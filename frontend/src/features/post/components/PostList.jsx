import { useEffect, useState } from 'react';
import { Wrapper } from './PostList.style';
import { getRealtimePosts } from '../api/getPosts';
import { Post } from './Post';
import { useSelector } from 'react-redux';

export const PostList = () => {
  const [postList, setPostList] = useState([]);
  const auth = useSelector(({ auth }) => auth);

  useEffect(() => {
    getRealtimePosts(setPostList);
  }, []);
  return (
    <Wrapper>
      {postList &&
        postList.map((post, i) => (
          <Post
            key={i}
            {...post}
            isMine={
              auth?.credential
                ? auth?.credential.user.uid === post.userId
                : false
            }
          />
        ))}
    </Wrapper>
  );
};
