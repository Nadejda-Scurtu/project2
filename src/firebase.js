import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAu66PdO7G85x_smi6OSn3qwFYHsWM9L1U",
  authDomain: "vuejsproject-c76c8.firebaseapp.com",
  projectId: "vuejsproject-c76c8",
  storageBucket: "vuejsproject-c76c8.appspot.com",
  messagingSenderId: "597461948051",
  appId: "1:597461948051:web:9b95920584f6ac6ea2df66",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

auth.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
auth.signInWithEmailAndPassword = signInWithEmailAndPassword;
auth.signInWithPopup = signInWithPopup;

const userCollection = collection(db, "users");

export { db, auth, storage, userCollection, provider };
