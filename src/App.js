// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
// import { auth } from "./firebaseConfig";
import Registration from "./Regitration/Registration";
import Login from "./Login";
import Documents from "./Documents/Documents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/docs" element={<Documents />} />
      </Routes>
    </>
  );
}

export default App;
