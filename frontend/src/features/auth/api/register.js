import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from 'libraries/firebase';

export const registerWithEmailAndPassword = async ({ email, password }) => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password);
};
