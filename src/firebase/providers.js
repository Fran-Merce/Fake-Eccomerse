import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseAuth } from './config';

const providerGoogle = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, providerGoogle);
    const { displayName, photoURL, uid, email } = result.user;

    return {
      ok: true,
      user: {
        displayName,
        photoURL,
        uid,
        email,
      },
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
      code: error.code,
    };
  }
};

export const registerWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid } = result.user;
    await updateProfile(result.user, { displayName });
    return {
      ok: true,
      user: {
        displayName,
        uid,
        email,
        password,
      },
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
      user: {},
    };
  }
};


export const loginWithEmailAndPassword = async ({ password, email }) => {
  console.log('aca')
  try {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, displayName, photoURL } = result.user;
    return {
      ok: true,
      user: {
        displayName,
        uid,
        email,
        photoURL,
      },
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
      user: {},
    };
  }
};

export const logoutFirebase = async () => await firebaseAuth.signOut();