import { firebaseAuth } from 'libraries/firebase';

export const logout = async () => {
  await firebaseAuth.signOut();
};
