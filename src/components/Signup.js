import React, { useState } from "react";
import "./stylesu.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [userId, setName] = useState();
  const [password, setPassword] = useState();
  //   any function helps me to access class component properties -> hook
  let handleSubmit = (event) => {
    let obj = { userId, password };
    const url = "http://localhost:4000/add-user";
    axios
      .post(url, obj)
      .then((res) => {
        if (res.status === 200) {
          alert("USer added sucessfully");
        } else {
          alert("error");
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>User Sign In Form</h1>
      <div className="form1">
        <label for="name" className="a3">
          USER ID
        </label>
        <input
          type="text"
          id="userId"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label for="pwd">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" className="a1" />
      </div>
      <p className="log">
        If account already present click to <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default SignUp;
