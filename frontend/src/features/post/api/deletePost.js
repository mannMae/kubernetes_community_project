import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { firebaseStorage, firestore } from 'libraries/firebase';

export const deletePost = async ({ postId, imageUrl }) => {
  await deleteDoc(doc(firestore, 'posts', postId));
  if (imageUrl) {
    await deleteObject(ref(firebaseStorage, imageUrl));
  }
};
