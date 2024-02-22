import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwa5NWlHw9WfzxiqsUb4frPCPwR7xL32w",
  authDomain: "akriti-1b16e.firebaseapp.com",
  projectId: "akriti-1b16e",
  storageBucket: "akriti-1b16e.appspot.com",
  messagingSenderId: "599891515348",
  appId: "1:599891515348:web:d7decfc2b39f80c8072841",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

