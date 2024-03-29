import { Wrapper } from './PostList.style';
import { Post } from './Post';
import { useSelector } from 'react-redux';

export const PostList = ({ postlist }) => {
  const auth = useSelector(({ auth }) => auth);

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
