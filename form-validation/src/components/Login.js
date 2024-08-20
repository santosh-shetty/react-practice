import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const usernameHandler = (e) => {
    if (e.length <= 4) {
      setUsernameErr("Please Enter minimum 4 characters!");
    } else {
      setUsernameErr(false);
    }
    setUsername(e.length);
  };

  const passwordHandler = (e) => {
    if (e.length <= 8) {
      setPasswordErr("Please Enter minimum 8 characters Password!");
    } else {
      setPasswordErr(false);
    }
    setPassword(e.length);
  };

  const loginHandler = (e) => {
    if (username <= 4 && password <= 8) {
      alert("Enter Valid data");
    } else {
      alert("Login successFully");
    }
    e.preventDefault();
  };

  return (
    <>
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={loginHandler}>
          {{ usernameErr } ? (
            <span className="Error">{usernameErr}</span>
          ) : (
            <></>
          )}
          <input
            type="text"
            placeholder="Enter your username.."
            onChange={(e) => usernameHandler(e.target.value)}
          ></input>

          {{ passwordErr } ? (
            <span className="Error">{passwordErr}</span>
          ) : (
            <></>
          )}
          <input
            type="password"
            placeholder="Enter your Password.."
            onChange={(e) => passwordHandler(e.target.value)}
          ></input>

          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
