import { PostList, getRealtimePosts } from 'features/post';
import { useEffect, useState } from 'react';

export const Search = () => {
  const [postlist, setPostList] = useState([]);
  const [filteredPostlist, setFilteredPostlist] = useState([]);

  const queryString = window.location.search;
  const searchWord = queryString.split('=')[1];

  useEffect(() => {
    getRealtimePosts(setPostList);
  }, []);

  useEffect(() => {
    setFilteredPostlist(postlist.filter((p) => p.content.includes(searchWord)));
  }, [postlist, searchWord]);
  console.log(postlist, filteredPostlist);
  return (
    <>
      <PostList postlist={filteredPostlist} />
    </>
  );
};
