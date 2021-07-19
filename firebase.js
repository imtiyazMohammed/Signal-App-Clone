import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbFDYOq5n7f81IM0d6iXo9LUS-iWR0Txs",
    authDomain: "signal-clone-proj.firebaseapp.com",
    projectId: "signal-clone-proj",
    storageBucket: "signal-clone-proj.appspot.com",
    messagingSenderId: "1087512293603",
    appId: "1:1087512293603:web:f0a99dcf914f05b84615d6"
  };

  let firebaseApp;

  if (firebase.apps.length === 0) {
      firebaseApp = firebase.initializeApp(firebaseConfig);
  } else {
      firebaseApp = firebase.app();
  }
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };
