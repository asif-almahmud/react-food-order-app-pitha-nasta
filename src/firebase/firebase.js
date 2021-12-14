import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt1FMEMT-Jf3dvWx390ZK1ckqmhEd7Awc",
  authDomain: "project-pitha-nasta.firebaseapp.com",
  projectId: "project-pitha-nasta",
  storageBucket: "project-pitha-nasta.appspot.com",
  messagingSenderId: "663863382105",
  appId: "1:663863382105:web:2fda77f1843056f83ee148",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection reference
const colRef = collection(db, "snacks");

// get collection data
export const availableSnacks = getDocs(colRef).then((snapshot) => {
  console.log(snapshot.docs);
  return snapshot.docs;
});
