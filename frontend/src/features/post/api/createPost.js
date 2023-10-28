import { firebaseStorage, firestore } from 'libraries/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

export const createPost = async ({ content, userId, image }) => {
  if (image) {
    const imageUpload = await uploadString(
      ref(firebaseStorage, `posts/${userId}`),
      image,
      'data_url'
    );
    const imageUrl = await getDownloadURL(imageUpload.ref);
    await addDoc(collection(firestore, 'posts'), {
      imageUrl,
      content,
      userId,
      createAt: Date.now(),
    });
  } else {
    const post = await addDoc(collection(firestore, 'posts'), {
      content,
      userId,
      createAt: Date.now(),
    }).then((res) => console.log(res));
    console.log(post);
  }
};
