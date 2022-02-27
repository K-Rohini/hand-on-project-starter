import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
//import {Link} from 'react-router-dom';
import logo from "../../assets/logo.png";
import group from "../../assets/group.png";

import { useNavigate } from "react-router";
const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    // if((username || email || password)===null){
    //   alert("Registered Successfully");
    //   e.preventDefault();
    //   navigate("../LDashboard", { replace: true });  
    // }else {
    //   alert("Complete Your Details");
    // }
    navigate("../LDashboard", { replace: true });

    try {
      const config = {
        headers: {
          "Context-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:3000/api/users",
        {
          username,
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

  // const onClickHandler = async(event) => {
  //     const name= event.target.name;
  //     const value= event.target.value;
  //     const newdata ={...user,[name]:value}
  //     setUser(newdata);
  //     const config = {
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //       };
  //       try {
  //        await axios.post("http://localhost:3000/api/users", user,config);
  //         navigate("/");
  //       } catch (error) {
  //         alert("Enter the creadentials which are not registered")
  //       }
  //   const data= await axios.post("http://localhost:3000/api/users",user)
  //   console.log(user);
  //   if(data){
  //       navigate('/Login')
  //   }
  // };

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <div className="header">
          <img src={group} alt="img"></img>
          <h1> Get Started </h1>
          <p>You can upload and download APIs for free </p>
        </div>

        <div className="login">
          <div className="loginsignup">
            <h1>Register !!</h1>
          </div>
          <div className="form">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                value={username}
                placeholder="New Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                value={email}
                placeholder="New email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                {/* <Link to= '/Loggedindb'>  */}
                <button className="butn">Signup</button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
