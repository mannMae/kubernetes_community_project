import { updateProfile } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { firebaseStorage, firestore } from 'libraries/firebase';

export const updateUser = async ({ user, image, nickname }) => {
  if (image) {
    const imageUpload = await uploadString(
      ref(firebaseStorage, `profile/${user?.uid}`),
      image,
      'data_url'
    );
    const imageUrl = await getDownloadURL(imageUpload.ref);
    return await updateProfile(user, {
      photoURL: imageUrl,
      displayName: nickname,
    }).then(async (res) => {
      await updateDoc(doc(firestore, 'users', user?.uid), {
        metadata: {
          email: user.email,
          displayName: nickname,
          photoURL: imageUrl,
        },
      });

      const userDoc = await getDoc(doc(firestore, `users/${user.uid}`));
      const postlist = userDoc.get('postlist');
      postlist.map(async (postId) => {
        await updateDoc(doc(firestore, 'posts', postId), {
          user: {
            id: user.uid,
            displayName: nickname,
            email: user.email,
            photoURL: imageUrl,
          },
        });
      });
    });
  } else {
    return await updateProfile(user, { displayName: nickname }).then(
      async (res) => {
        await updateDoc(doc(firestore, 'users', user?.uid), {
          metadata: {
            email: user.email,
            displayName: nickname,
            photoURL: user.photoURL,
          },
        });

        const userDoc = await getDoc(doc(firestore, `users/${user.uid}`));
        const postlist = userDoc.get('postlist');
        console.log(postlist);
        postlist.map(async (postId) => {
          console.log(postId);
          await updateDoc(doc(firestore, 'posts', postId), {
            user: {
              id: user.uid,
              displayName: nickname,
              email: user.email,
              photoURL: user.photoURL,
            },
          });
        });
      }
    );
  }
};
