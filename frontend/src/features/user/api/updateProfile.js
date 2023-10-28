import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { firebaseStorage } from 'libraries/firebase';

export const updateUser = async ({ user, image, nickname }) => {
  if (image && user) {
    const imageUpload = await uploadString(
      ref(firebaseStorage, `profile/${user?.uid}`),
      image,
      'data_url'
    );
    const imageUrl = await getDownloadURL(imageUpload.ref);
    return await updateProfile(user, {
      photoURL: imageUrl,
      displayName: nickname,
    });
  } else {
    return await updateProfile(user, { displayName: nickname });
  }
};
