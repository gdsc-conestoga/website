import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resources from "./pages/resources/Resources";
import Calendar from "./pages/calendar/Calendar";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/404";
import Menu from "./components/menu/Menu";
import { initializeApp } from "firebase/app";
import Modal from 'react-modal'
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

const auth = getAuth()
connectAuthEmulator(auth, "http://localhost:9099");
const firestore = getFirestore()
connectFirestoreEmulator(firestore, 'localhost', '8080')

Modal.setAppElement('#modal');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Menu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
