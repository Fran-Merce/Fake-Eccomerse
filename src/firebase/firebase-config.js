export const firebaseConfig = {
  apiKey: 'AIzaSyDdceM0GQ0sWMKXLJdXKnSXmqCD-b8WDu8',
  authDomain: 'integrador3-a637b.firebaseapp.com',
  projectId: 'integrador3-a637b',
  storageBucket: 'integrador3-a637b.appspot.com',
  messagingSenderId: '235097332329',
  appId: '1:235097332329:web:8da0a9cb836b59dcb620f8',
};

export const actionCodeSettingVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5173/home'
      : 'http://localhost:5173',
};

export const actionCodeSettingPasswordReset = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5173/auth/login'
      : 'http://localhost:5173',
}