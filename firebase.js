import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "signal-clone-proj.firebaseapp.com",
    projectId: "signal-clone-proj",
    storageBucket: "signal-clone-proj.appspot.com",
    messagingSenderId: "10812293603",
    appId: "1:108712293603:web:f0a99dcf4f05b84615d6"
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
