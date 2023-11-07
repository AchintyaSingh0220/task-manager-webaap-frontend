import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
  const [userId, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    let obj = { userId: userId, password: password };
    Axios.post("http://localhost:4000/add-user", obj)
      .then((res) => {
        if(res.status === 200) {
          alert("User added sucessfully");
          props.getUserId(userId);
          navigate("/task-list");
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1 className="mb-5 bg-info text-dark">User Sign In Form</h1>
      <div className="border border-dark bg-secondary text-light">
        <label for="name" className="mt-5 pr-2">
          USER ID
        </label>
        <input
          type="text"
          id="userId"
          onChange={(e) => setName(e.target.value)}
          className="m-3"
        />
        <br />
        <label for="pwd" className="mt-3">
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="m-3"
        />
        <br />
        <input type="submit" className="my-4 bg-dark text-light" />
      </div>
      <div className="mt-5">
        Already have an account? Click <Link to="/login">here</Link> to log in
      </div>
    </form>
  );
}

export default SignUp;