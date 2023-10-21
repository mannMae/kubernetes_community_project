import { firestore } from 'libraries/firebase';
import { addDoc, collection } from 'firebase/firestore';

export const createPost = async (post) => {
  await addDoc(collection(firestore, 'posts'), {
    ...post,
    createAt: Date.now(),
  })
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};
