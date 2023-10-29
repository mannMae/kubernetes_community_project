import { doc, updateDoc } from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadString,
} from 'firebase/storage';
import { firebaseStorage, firestore } from 'libraries/firebase';

export const updatePost = async ({
  postId,
  content,
  userId,
  image,
  prevImageUrl,
}) => {
  if (image) {
    const imageUpload = await uploadString(
      ref(firebaseStorage, `posts/${userId}/${postId}`),
      image,
      'data_url'
    );
    const imageUrl = await getDownloadURL(imageUpload.ref);
    await updateDoc(doc(firestore, 'posts', postId), { content, imageUrl });
  } else if (prevImageUrl) {
    await updateDoc(doc(firestore, 'posts', postId), {
      content,
      imageUrl: null,
    });
    await deleteObject(ref(firebaseStorage, prevImageUrl));
  } else {
    await updateDoc(doc(firestore, 'posts', postId), {
      content,
    });
  }
};
