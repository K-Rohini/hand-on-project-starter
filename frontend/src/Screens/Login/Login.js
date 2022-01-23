import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Login.css";
import group from "../../assets/group.png";

import { useNavigate } from "react-router-dom";
import {ThreeBounce} from "better-react-spinkit";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    navigate("../LDashboard", { replace: true });
    try {
      const config = {
        headers: {
          "Context-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // const login = (e) => {
  //       e.preventDefault();
  // };

  // const Signup = (e) => {
  //     e.preventDefault();
  // };
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <div className="header">
          <img src={group} alt="img"></img>
          <h1> Welcome to your Dashboard </h1>
          <p>
            Your uploaded APIs will be displayed here once you login to your
            account.{" "}
          </p>
        </div>

        <div className="login">
          <div className="loginsignup">
            <h1>Login to your account</h1>
          </div>
          <div className="form">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                autoComplete="username"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div>
                {/* <Link to ='/loggedindb' style={{textDecoration:'none'}}>  */}
                <button
                  // onClick={login}
                  type="submit"
                  className="button1"
                >
                 Login 
                </button>
                {/* </Link> */}
                <Link to="/Register" style={{ textDecoration: "none" }}>
                  <button
                    // onClick={Signup}
                    className="button2"
                  >
                    Signup
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
