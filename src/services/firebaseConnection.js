import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAy1EsfbPaBZlfxvDfD1Eo6qkd0zMHayAI",
    authDomain: "sistema-chamados-7cf43.firebaseapp.com",
    projectId: "sistema-chamados-7cf43",
    storageBucket: "sistema-chamados-7cf43.appspot.com",
    messagingSenderId: "999507686250",
    appId: "1:999507686250:web:ed81646cb89aa800a32b13",
    measurementId: "G-V94SBM2GM0"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;