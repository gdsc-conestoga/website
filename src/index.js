import { initializeApp } from "firebase/app"
import React from "react"
import ReactDOM from "react-dom"
import Modal from 'react-modal'
import { ThemeProvider } from "./components/ThemeProvider"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { getAuth, connectAuthEmulator } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAHV3ZQEJeMZG_WwPNrQuqS46MCCvyw1ms",
  authDomain: "gdsc-conestoga.firebaseapp.com",
  projectId: "gdsc-conestoga",
  storageBucket: "gdsc-conestoga.appspot.com",
  messagingSenderId: "744727488876",
  appId: "1:744727488876:web:95a3467337021f8fd7ab49",
  measurementId: "G-E1MNYW2RZ2"
};

initializeApp(firebaseConfig);

console.log('Mode: ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  const auth = getAuth()
  connectAuthEmulator(auth, "http://localhost:9099");
  const firestore = getFirestore()
  connectFirestoreEmulator(firestore, 'localhost', '8080')
}

Modal.setAppElement('#modal');

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
