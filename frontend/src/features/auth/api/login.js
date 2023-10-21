import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {
  firebaseAuth,
  githubProvider,
  googleProvider,
} from 'libraries/firebase';

export const loginWithEmailAndPassword = async ({ email, password }) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const loginWithGoogle = async () => {
  return await signInWithPopup(firebaseAuth, googleProvider);
};

export const loginWithGithub = async () => {
  return await signInWithPopup(firebaseAuth, githubProvider);
};
