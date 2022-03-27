import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import { colRef } from "../firebaseConfig";
function Registration() {
  const history = useNavigate();

  const [username, setusername] = useState("");
  const [phone, setphone] = useState();
  const [email, setemail] = useState("");

  return (
    <>
      <div className="full">
        <form
          className="form-group col-md-4"
          onSubmit={async (e) => {
            e.preventDefault();

            // setDoc(colRef, { capital: true }, { merge: true });
            try {
              await addDoc(colRef, {
                username,
                phone,
                email,
              });
            } catch (err) {
              alert(err);
            }
            history("/login");
          }}
        >
          <div className="box">
            <label for="username">Username</label>
            <input
              className="form-control field"
              onChange={(e) => setusername(e.target.value)}
              type="text"
              placeholder="Enter username"
              maxLength={10}
            />
          </div>
          <div className="box">
            <label for="phone">Phone Number</label>
            <input
              className="form-control field"
              onChange={(e) => setphone(e.target.value)}
              type="tel"
              placeholder="Enter Phone No."
              maxLength={10}
            />
          </div>
          <div className="box">
            <label for="email">email</label>
            <input
              className="form-control field"
              onChange={(e) => setemail(e.target.value)}
              type="text"
              placeholder="Enter email"
            />
          </div>

          <button type="submit" value="Submit" className="btn btn-primary">
            Submit
          </button>
          <p>
            Already a user? <Link to="/login">signin</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Registration;
