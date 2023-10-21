import { deleteDoc, doc } from 'firebase/firestore';
import { firestore } from 'libraries/firebase';

export const deletePost = async (postId) => {
  await deleteDoc(doc(firestore, 'posts', postId));
};
