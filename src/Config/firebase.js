import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC84uiRy9AlevnrNmylY0WCy_PD6idy3og",
    authDomain: "galleryproject-3b471.firebaseapp.com",
    projectId: "galleryproject-3b471",
    storageBucket: "galleryproject-3b471.appspot.com",
    messagingSenderId: "273302088269",
    appId: "1:273302088269:web:eca385582eb2ac3e264a04"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.auth = firebase.auth()
  export default firebase