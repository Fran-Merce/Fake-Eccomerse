import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth, createUserProfileDocument } from '../firebase/firebase-utils';
import { setCurrentUserAction } from '../redux/auth/authActions';

function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      if (!userRef) return cb(action(null));
      onSnapshot(userRef, snapShot =>
        cb(action({ id: snapShot.id, ...snapShot.data() }))
      );
    } else {
      cb(action(null));
    }
  });
}

export const useAuthCheck = () => {
  const dispatch = useDispatch();
  useEffect(() => onAuthStateChange(dispatch, setCurrentUserAction), [dispatch]);
};
