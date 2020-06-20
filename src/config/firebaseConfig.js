import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDCQnwQeycQc5SqVYezkWBV5agTC1Ygb4E",
  authDomain: "todofirebasereactredux.firebaseapp.com",
  databaseURL: "https://todofirebasereactredux.firebaseio.com",
  projectId: "todofirebasereactredux",
  storageBucket: "todofirebasereactredux.appspot.com",
  messagingSenderId: "97288650599",
  appId: "1:97288650599:web:3079303e03726dfbdc79c2"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;