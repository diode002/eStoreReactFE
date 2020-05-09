import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDODRhCEMMmu3hZzfWrkiZPQaKuBxVjsjM",
  authDomain: "estore-002.firebaseapp.com",
  databaseURL: "https://estore-002.firebaseio.com",
  projectId: "estore-002",
  storageBucket: "estore-002.appspot.com",
  messagingSenderId: "757875952831",
  appId: "1:757875952831:web:12f4e79d044d3934df0a0a",
  measurementId: "G-NDTYB2TYW8",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  login_hint: "user@example.com",
  prompt: "select_account",
});

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const signinWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      // var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
};
export default firebase;
