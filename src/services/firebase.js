import firebase from "firebase/app";

import "firebase/database"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDXDploXYX-9FG_dVEkzCywErZEb24phD8",
    authDomain: "challenge-1a3c2.firebaseapp.com",
    databaseURL: "https://challenge-1a3c2-default-rtdb.firebaseio.com",
    projectId: "challenge-1a3c2",
    storageBucket: "challenge-1a3c2.appspot.com",
    messagingSenderId: "126225975146",
    appId: "1:126225975146:web:d9efc4d5b69772ed3cc713",
    measurementId: "G-8PR4C9TVVP"
}

export const Firebase = firebase.initializeApp(firebaseConfig);
