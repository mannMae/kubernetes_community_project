import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from 'libraries/firebase';

export const updatePost = async ({ postId, content }) => {
  await updateDoc(doc(firestore, 'posts', postId), { content });
};
