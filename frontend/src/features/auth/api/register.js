import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { firebaseAuth, firestore } from 'libraries/firebase';

export const registerWithEmailAndPassword = async ({ email, password }) => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password).then(
    async (res) => {
      await setDoc(doc(firestore, `users`, res.user.uid), {
        metadata: {
          photoURL: res.user.photoURL,
          displayName: res.user.displayName,
          email: res.user.email,
        },
        postlist: [],
      });
    }
  );
};
