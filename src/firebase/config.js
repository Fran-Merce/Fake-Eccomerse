import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdceM0GQ0sWMKXLJdXKnSXmqCD-b8WDu8',
  authDomain: 'integrador3-a637b.firebaseapp.com',
  projectId: 'integrador3-a637b',
  storageBucket: 'integrador3-a637b.appspot.com',
  messagingSenderId: '235097332329',
  appId: '1:235097332329:web:8da0a9cb836b59dcb620f8',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);