import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");

  const hendelSubmit = () => {
    e.preventDefault();
  };

  return (
    <form className="forgatPasswored">
      <div>
        <div className="forgatPasswored-cantener">
        <h1 style={{ padding: "10px" }}>Forgot Password</h1>

          <div className="forgatPasswored-Input" >
            <p
              style={{margin:"10px 30px",color:"blue",textAlign:"justify" }}
            >
              Plese enter the email address you'd like you password reset
              information send to
            </p>
            <label style={{margin:"10px",display:"flex"}}>Enter email address</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <button
             style={{margin :"10px",width:"330px"}}
              onClick={hendelSubmit}
            >
              Request Reset Link
            </button>

            <div
             
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                {" "}
                Back To Login
              </Link>
            </div>
          </div>
          </div>
        </div>
   
    </form>
  );
};

export default Registration;

