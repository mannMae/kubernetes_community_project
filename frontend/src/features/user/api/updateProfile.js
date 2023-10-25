import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { firebaseStorage } from 'libraries/firebase';

export const updateUser = async ({ user, image }) => {
  if (image && user) {
    const imageUpload = await uploadString(
      ref(firebaseStorage, `profile/${user?.uid}`),
      image,
      'data_url'
    );
    const imageUrl = await getDownloadURL(imageUpload.ref);
    await updateProfile(user, { photoURL: imageUrl });
  } else {
  }
};
