import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyBmIU4RBfouX1jd9Lwbn9BTJ0rb-04TomE',
  authDomain: 'wily-app-aae00.firebaseapp.com',
  projectId: 'wily-app-aae00',
  storageBucket: 'wily-app-aae00.appspot.com',
  messagingSenderId: '129796654246',
  appId: '1:129796654246:web:5c4c71b814c64de9a16067',
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
