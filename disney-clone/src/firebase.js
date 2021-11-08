import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyBGu4iI-i1eM09i9DE0KIx5lwGLlTmFEls",
    authDomain: "disney-clone-e640e.firebaseapp.com",
    projectId: "disney-clone-e640e",
    storageBucket: "disney-clone-e640e.appspot.com",
    messagingSenderId: "1021549642546",
    appId: "1:1021549642546:web:b810dfda97625b13fccd2b",
    measurementId: "G-XHL7SPX9V9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export {auth, provider,storage};
  export default db;
