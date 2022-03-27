// import { DocumentSnapshot } from "firebase/firestore";
import { useState } from "react";
// import { doc, setDoc, addDoc } from "firebase/firestore";
// import { db, getDoc, colRef } from "../firebaseConfig";

const Documents = () => {
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [submit, setSubmit] = useState(false);
  const [gst, setGST] = useState("");

  return (
    <>
      {submit ? (
        <div className="box full">
          <form className="form-group col-md-4">
            <label for="GST No.">GST No.*</label>
            <input
              className="form-control field"
              onChange={(e) => {
                let regex =
                  /^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})$/;
                if (regex.test(e.target.value)) setGST(e.target.value);
              }}
              type="text"
              placeholder="Enter GST number"
              pattern="/^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})$/"
              minLength={12}
              maxLength={12}
            />
            <button type="submit" value="Submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="full">
          <form
            className="form-group col-md-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmit(true);
              // try {
              //   await addDoc(colRef, {
              //     aadhar,
              //     pan,
              //   });
              // } catch (err) {
              //   alert(err);
              // }
            }}
          >
            <div className="box">
              <label>Aadhar No.*</label>

              <input
                className="form-control field"
                onChange={(e) => {
                  let regex = /^[01]\d{3}[\s-]?\d{4}[\s-]?\d{4}$/;
                  if (regex.test(e.target.value)) {
                    console.log(
                      regex.test(e.target.value),
                      "testing",
                      e.target.value
                    );
                    setAadhar(e.target.value);
                  }
                }}
                type="text"
                placeholder="Enter Aadhaar number"
                pattern="^\d{4}\s\d{4}\s\d{4}$"
                value={aadhar}
              />
            </div>
            <div className="box">
              <label>PAN No.*</label>
              <input
                className="form-control field"
                onChange={(e) => {
                  let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                  // if(regex.test(e.target.value){setPan(e.target.value)};
                  if (regex.test(e.target.value)) {
                    setPan(e.target.value);
                  }
                }}
                type="text"
                placeholder="Enter Phone No."
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                maxLength={10}
              />
            </div>
            <button type="submit" value="Submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Documents;
