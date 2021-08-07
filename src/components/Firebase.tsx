import { useContext, useEffect } from 'react';
import firebase from 'firebase/app';
import "firebase/performance";
import "firebase/analytics";
import AppContext from "../context/appContext";

const firebaseConfig = {
  apiKey: "AIzaSyCk7qFoeGmgCTOhH7RqTN54vkNERtxED4E",
  authDomain: "random-attacks.firebaseapp.com",
  projectId: "random-attacks",
  storageBucket: "random-attacks.appspot.com",
  messagingSenderId: "945633082803",
  appId: "1:945633082803:web:e64b01b5439d7f0b101fc6",
  measurementId: "G-695ZT356QC",
};

firebase.initializeApp(firebaseConfig);

export const useFirebase = () => {
  return firebase;
}

const Firebase = () => {
  const { cookiesEnabled } = useContext(AppContext);

  useEffect(() => {
    if (cookiesEnabled) {
      firebase.analytics();
      firebase.performance();
    }
  }, [cookiesEnabled]);

  return null;
}

export default Firebase;