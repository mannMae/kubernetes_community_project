import { PostList, getRealtimePosts } from 'features/post';
import { useEffect, useState } from 'react';

export const Search = () => {
  const [postlist, setPostList] = useState([]);
  const [filteredPostlist, setFilteredPostlist] = useState([]);

  const queryString = window.location.search;
  const searchWord = queryString.split('=')[1];
  const decodedSearchWord = decodeURI(searchWord);

  useEffect(() => {
    getRealtimePosts(setPostList);
  }, []);

  useEffect(() => {
    setFilteredPostlist(
      postlist.filter((p) => p.content.includes(decodedSearchWord))
    );
  }, [postlist, searchWord]);

  return (
    <>
      <PostList postlist={filteredPostlist} />
    </>
  );
};
