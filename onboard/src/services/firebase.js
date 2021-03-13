

/* import dotenv from 'dotenv' */

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Login from "../Login";
/* dotenv.config(); */



const firebaseConfig = ({
  /* apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID */

  apiKey: "AIzaSyDA9ozpcEFArjsc2x_eC32RgX8zKcfxpWo",
  authDomain: "onboard-purple.firebaseapp.com",
  projectId: "onboard-purple",
  storageBucket: "onboard-purple.appspot.com",
  messagingSenderId: "1042197184844",
  appId: "1:1042197184844:web:a374f340e7aaf1dbb50fe9",
  measurementId: "G-Y7LQR278L4"
});
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    // user object
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
export const logOut = () => {
  auth.signOut().then(() => {
    console.log('logged out')

  }).catch((error) => {
    console.log(error.message)
  })
}