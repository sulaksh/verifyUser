import React from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const [value, setvalue] = useState(0);
  const [otp, setotp] = useState(0);
  const history = useNavigate();

  console.log(value);

  const clickHandler = () => {
    console.log("Clicked");

    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
          console.log("response");
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
          alert("expired");
        },
      },
      auth
    );
    onSignInSubmit();
  };

  const onSignInSubmit = () => {
    console.log("Inside onSignInSubmit");
    const phoneNumber = value;
    const appVerifier = window.recaptchaVerifier;
    console.log("first");
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log("Inside signInWithPhoneNumber");
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error);
      });
  };

  const otpVerification = (e) => {
    e.preventDefault();
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        // const user = result.user;
        // ...
        history("/docs");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        alert(error, "OTP failed");
      });
  };

  return (
    <div className="App">
      <form className="form-group">
        <div className="box">
          <label>Enter phoneNumber</label>
          <input
            className="form-control field"
            type="tel"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          id="sign-in-button"
          onClick={(e) => {
            e.preventDefault();
            clickHandler();
          }}
        >
          GET OTP
        </button>
        <div className="box">
          <label>Enter OTP</label>
          <input
            className="form-control field"
            type="number"
            value={otp}
            onChange={(e) => setotp(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={otpVerification}>
          Submit
        </button>

        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
}

export default Login;
