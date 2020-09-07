
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCxGpSjX8jaRXWMrzLMiNTm7SKmM6JjqZI",
    authDomain: "webapp-7cd76.firebaseapp.com",
    databaseURL: "https://webapp-7cd76.firebaseio.com",
    projectId: "webapp-7cd76",
    storageBucket: "webapp-7cd76.appspot.com",
    messagingSenderId: "493956753638",
    appId: "1:493956753638:web:bc504aadc8b5858e60f327",
    measurementId: "G-S8109PHD9V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth};