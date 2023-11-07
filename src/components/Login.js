import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [userId, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = "http://localhost:4000/users/" + userId;
    Axios
      .get(url)
      .then((res) => {
        console.log(res);
        if(!res.data) {
          alert("User does not exist");
        } else if(res.data.password !== password) {
          alert("Incorrect Password");
        } else {
          props.getUserId(userId);
          navigate("/task-list");
        }
      })
      .catch((err) => {
        alert(err);
      });
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
      <div className="mt-5">
        New here? Click <Link to="/">here</Link> to sign up
      </div>
    </form>
  );
}

export default Login;