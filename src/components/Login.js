import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [userId, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    const url = "http://localhost:4000/";
    const obj = { userId, password };
    axios
      .post(url, obj)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1> Login Form</h1>
      <label for="userId">USER</label>
      <input
        type="text"
        id="userId"
        onChange={(e) => setName(e.target.value)}
      />
      <label for="pwd">Password</label>
      <input
        type="password"
        id="pwd"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default Login;
