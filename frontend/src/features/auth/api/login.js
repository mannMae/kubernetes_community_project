import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {
  firebaseAuth,
  githubProvider,
  googleProvider,
} from 'libraries/firebase';

export const loginWithEmailAndPassword = async ({ email, password }) => {
  await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const loginWithGoogle = async () => {
  await signInWithPopup(firebaseAuth, googleProvider)
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};

export const loginWithGithub = async () => {
  await signInWithPopup(firebaseAuth, githubProvider)
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};
