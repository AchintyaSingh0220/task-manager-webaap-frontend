import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userId, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = "http://localhost:4000/login";
    const obj = { userId, password };
    axios
      .post(url, obj)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    navigate("/task-list");
  };
  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1 className="bg-secondary text-light p-2 mb-5"> Login Form</h1>
      <div className="border border-warning rounded bg-info">
        <label for="userId" className="mt-3 pr-2">
          Username
        </label>
        <input
          type="text"
          id="userId"
          onChange={(e) => setName(e.target.value)}
          className="m-3"
        />
        <br />
        <label for="pwd" className="mt-3 pr-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="m-3"
        />
        <br />
        <input type="submit" className="mt-3 mb-4" />
      </div>
    </form>
  );
}

export default Login;