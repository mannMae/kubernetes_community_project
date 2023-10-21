import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { firestore } from 'libraries/firebase';

export const getPosts = async (setPostList) => {
  return await getDocs(collection(firestore, 'posts'));
};

export const getRealtimePosts = (setPostList) => {
  return onSnapshot(collection(firestore, 'posts'), (snapshot) => {
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setPostList(posts);
  });
};
