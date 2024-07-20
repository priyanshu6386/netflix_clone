import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_gV-T_zp7-cV5NSw6aMzHk7srs9eIDQQ",
  authDomain: "netflix-clone-7f7e0.firebaseapp.com",
  projectId: "netflix-clone-7f7e0",
  storageBucket: "netflix-clone-7f7e0.appspot.com",
  messagingSenderId: "48469458417",
  appId: "1:48469458417:web:dc376a9724248e01c91850",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    alert(error)
  }
};

const logout =()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};
