import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { swalModalAuth } from '../helpers/swal/swal';
import {
  actionCodeSettingPasswordReset,
  actionCodeSettingVerification,
  firebaseConfig,
} from './firebase-config';

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth();
auth.useDeviceLanguage();
export const firestore = getFirestore(firebaseApp);

export const createUserProfileDocument = async userAuth => {
  // if (!userAuth || !userAuth.emailVerified) return;
  if (!userAuth) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || email,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export const singInWithGoogle = () => signInWithPopup(auth, provider);

export const createUser = async ({ email, password, displayName }) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  // await sendEmailVerification(res.user, actionCodeSettingVerification);
  // console.log(await sendEmailVerification(res.user, actionCodeSettingVerification));
  await updateProfile(res.user, { displayName });

  // Swal.fire(
  //   swalModalAuth(
  //     'Email',
  //     `Mensaje de verificación enviado al mail ${email} `,
  //     'success'
  //   )
  // );
};

export const singInUser = async ({ email, password }) =>
  await signInWithEmailAndPassword(auth, email, password);

export const resetPassword = async email => {
  await sendPasswordResetEmail(auth, email, actionCodeSettingPasswordReset);
  Swal.fire(
    swalModalAuth(
      'Email',
      `Restablecimiento de contraseña enviado a ${email} `,
      'success'
    )
  );
};
