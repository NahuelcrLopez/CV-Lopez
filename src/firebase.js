import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDSFERLuRxj1vr0aP-hX46midEVsXVgTr0",
    authDomain: "proyecto-nahuel.firebaseapp.com",
    projectId: "proyecto-nahuel",
    storageBucket: "proyecto-nahuel.appspot.com",
    messagingSenderId: "537193662001",
    appId: "1:537193662001:web:0b5117357eb42feaf23710",
    measurementId: "G-GXZ8NLVNL0"
});

export const getFirebase = () => firebaseConfig;
export const getFireStore = () => firebase.firestore(firebaseConfig);