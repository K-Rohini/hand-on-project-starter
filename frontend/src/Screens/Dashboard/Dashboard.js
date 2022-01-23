import React from 'react'
import './Dashboard.css';
import {Link} from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import Card from '../../components/Card/Card';
import Navbar from "../../components/Navbar/Navbar"
import img from '../../assets/img1.png';
// import logo from '../../assets/logo.png';
const Dashboard = () => {
    // const navigate = useNavigate();
    var apis = [
        {
            heading:"Background Remover",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"1"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"2"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"3"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"1"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"2"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"3"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"1"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"2"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"3"
        },

        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"1"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"2"
        },
        {
            heading:"API Name",
            desc:"The description of API in quick brief and we will truncate it here..",
            id:"3"
        },
    ]
    return (
    <div className="dashboard">
        <div className="banner">
            <img alt="img-1" src={img} className="img-1"></img>
            <div className="semi-circle"></div>
            <div className="api-ad">
            <div className="api-ad-col">
            <div className="api-ad-txt">BACKGROUND IMAGE REMOVE</div>
            <div className="api-ad-info-txt">100% automatic and free</div>
            </div>
            <button className="view-app">View App</button>
            </div>
        </div>
        <p className="all-api-txt">All APIs</p>
      

       {apis.map((e)=>{
           return(
               <Card id={e.id} heading={e.heading} desc={e.desc}/>
           );
       })}
       
        
    </div>

    )
}

export default Dashboard
