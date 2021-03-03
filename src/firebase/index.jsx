import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB1IJSdUWXRzixOFJh70S7wDZw5Fnn5bGw",
    authDomain: "proyecto-react-cisum-evil.firebaseapp.com",
    projectId: "proyecto-react-cisum-evil",
    storageBucket: "proyecto-react-cisum-evil.appspot.com",
    messagingSenderId: "622419449604",
    appId: "1:622419449604:web:33a0263a0c5c75a5866251",
    measurementId: "G-3KETGHBL1Y"
});

export const getFirebase = () => {
  return app;
}

export const getFirestore = () => {
  return firebase.firestore(app);
}