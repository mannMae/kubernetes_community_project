import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { firebaseStorage, firestore } from 'libraries/firebase';

export const deletePost = async ({ postId, imageUrl, userId }) => {
  await deleteDoc(doc(firestore, 'posts', postId));
  if (imageUrl) {
    await deleteObject(ref(firebaseStorage, imageUrl));
  }
  const userDoc = await getDoc(doc(firestore, `users/${userId}`));
  const postlist = userDoc.get('postlist');
  await updateDoc(doc(firestore, 'users', userId), {
    postlist: postlist.filter((id) => id !== postId),
  });
};
