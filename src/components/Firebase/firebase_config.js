import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgAMpM0VCo6XsfTSj4Kavqkkm4GTOOt44",
  authDomain: "todoapp-85b46.firebaseapp.com",
  projectId: "todoapp-85b46",
  storageBucket: "todoapp-85b46.appspot.com",
  messagingSenderId: "572502793054",
  appId: "1:572502793054:web:a2b2c5ba1b7c09c4d04dcf",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
