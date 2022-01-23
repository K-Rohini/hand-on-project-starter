import React from 'react'
import Dashboard from './Dashboard'
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";

const MPC_DB = () => {
    return (
        <>
       <div className='nav-bar'>
            <img src={logo} className="logo" alt='logo'/>
            <Link to="/Login">
            <button className="login-sign-btn btn-1" >Login / Signup</button> 
            </Link>
        </div>
        <Dashboard></Dashboard>
        </>
    );
    }
export default MPC_DB;
