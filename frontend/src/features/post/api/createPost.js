import { firebaseStorage, firestore } from 'libraries/firebase';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

export const createPost = async ({ content, image, user }) => {
  if (image) {
    await addDoc(collection(firestore, 'posts'), {
      content,
      user,
      createAt: Date.now(),
    }).then(async (res) => {
      const imageUpload = await uploadString(
        ref(firebaseStorage, `posts/${user.id}/${res.id}`),
        image,
        'data_url'
      );
      const imageUrl = await getDownloadURL(imageUpload.ref);
      await updateDoc(doc(firestore, 'posts', res.id), { imageUrl });

      const userDoc = await getDoc(doc(firestore, `users/${user.id}`));
      const postlist = userDoc.get('postlist');
      await updateDoc(doc(firestore, 'users', user.id), {
        postlist: [...postlist, res.id],
      });
    });
  } else {
    await addDoc(collection(firestore, 'posts'), {
      content,
      user,
      createAt: Date.now(),
    }).then(async (res) => {
      const userDoc = await getDoc(doc(firestore, `users/${user.id}`));
      const postlist = userDoc.get('postlist');
      await updateDoc(doc(firestore, 'users', user.id), {
        postlist: [...postlist, res.id],
      });
    });
  }
};
