import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCCUKHvCOT1b86q-XEvudyqIFfaAUJ2il4",
  authDomain: "los-sprinters.firebaseapp.com",
  projectId: "los-sprinters",
  storageBucket: "los-sprinters.appspot.com",
  messagingSenderId: "750115728977",
  appId: "1:750115728977:web:8e071c48b8d74647c39270",
  measurementId: "G-ZDNVMS3VQF"
}

if(!firebase.apps[0]){
  firebase.initializeApp(firebaseConfig);
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);