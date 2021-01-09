import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCWABbxJRkeIgsD0TUfnvvbcbtNvBHB9KY",
  authDomain: "tunez-71044.firebaseapp.com",
  projectId: "tunez-71044",
  storageBucket: "tunez-71044.appspot.com",
  messagingSenderId: "250509670980",
  appId: "1:250509670980:web:9f15af9b405a67ce29da11"
};

firebase.initiliazeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };