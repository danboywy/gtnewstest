// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendPasswordResetEmail
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkMhnXb-OJJ_9tycxHAqLHX1TB8ZGzA-o",
  authDomain: "gtnews-96932.firebaseapp.com",
  projectId: "gtnews-96932",
  storageBucket: "gtnews-96932.appspot.com",
  messagingSenderId: "594358326626",
  appId: "1:594358326626:web:ee9bdf2473911b0703483b",
  measurementId: "G-3VVD431NEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + ".png");

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });

  setLoading(false);
  alert("Uploaded file!");
}
export function forgotPassword (email){
   return sendPasswordResetEmail(auth,email);
 }

export async function changeEmail(currentUser, newEmail, pass) {
  //console.log("Email before: ", currentUser.email, "\n")
  const credential = EmailAuthProvider.credential(currentUser.email, pass);
  var test = false;
  try {
    const result = await reauthenticateWithCredential(currentUser, credential);
    console.log("result: ", result);
    await updateEmail(currentUser, newEmail)
      .then(() => {
        //Updated
        console.log("New email: ", currentUser.email, "\n");
        test = true;
        console.log("test in firebase: ", test);
      })
      .catch((error) => {
        console.log("error\n");
      });
  } catch (error) {
    console.log("Error: ", error.message);
    if (error.message == "Firebase: Error (auth/wrong-password).") {
      pass = prompt("Invalid password");
      changeEmail(currentUser, newEmail, pass);
    } else if (error.message == "Firebase: Error (auth/internal-error).") {
      console.log("cancelled out");
    }
  } finally {
    return test;
  }
}

export async function changePass(currentUser, newPass, oldPass) {
  //console.log("Email before: ", currentUser.email, "\n")
  const credential = EmailAuthProvider.credential(currentUser.email, oldPass);
  var success = false;
  try {
    const result = await reauthenticateWithCredential(currentUser, credential);
    console.log("result: ", result);
    await updatePassword(currentUser, newPass)
      .then(() => {
        //Updated
        console.log("New password: ", currentUser.password, "\n");
        success = true;
        console.log("Success in firebase: ", success);
      })
      .catch((error) => {
        console.log("error updating password\n");
      });
  } catch (error) {
    console.log("Error: ", error.message);
    if (error.message == "Firebase: Error (auth/wrong-password).") {
      console.log("wrong password");
      var pass = prompt("Invalid Password. Please try again.");
      changePass(currentUser, newPass, pass);
    } else if (error.message == "Firebase: Error (auth/internal-error).") {
      console.log("cancelled out");
    }
  } finally {
    return success;
  }
}

export function initDB() {
  return getDatabase(app);
}