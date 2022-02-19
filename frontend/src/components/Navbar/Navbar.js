import "../../App.css";
import "./Navbar.css";
//import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
 function Navbar() {

    return(
   
     <div className='nav-bar'>
            <img src={logo} className="logo" alt='logo'/>
            <p className='my-api'>My APIs</p>
            <p className='my-account'>My Account</p>
            <button className="login-sign-btn btn-1" >+My Apis</button> 
        </div>
     
    );
}
export default Navbar;