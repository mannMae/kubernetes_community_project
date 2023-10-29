import { useEffect, useState } from 'react';
import { Wrapper } from './PostList.style';
import { getRealtimePosts } from '../api/getPosts';
import { Post } from './Post';
import { useSelector } from 'react-redux';

export const PostList = () => {
  const [postlist, setPostList] = useState([]);
  const auth = useSelector(({ auth }) => auth);

  useEffect(() => {
    getRealtimePosts(setPostList);
  }, []);

  console.log(postlist);

  return (
    <Wrapper>
      {postlist &&
        postlist.map((post, i) => (
          <Post
            key={i}
            {...post}
            isMine={
              auth?.credential
                ? auth?.credential.user.uid === post?.user?.id
                : false
            }
            imageUrl={post?.imageUrl && post?.imageUrl}
          />
        ))}
    </Wrapper>
  );
};
