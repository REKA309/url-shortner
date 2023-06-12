import React from "react";
import {Link} from 'react-router-dom'
export default function Login()
{
  return(
   <div className="Login-container">
    <h1 style={{textAlign:'center',fontFamily:'Georgia, Times New Roman, Times, serif'}}>URL SHORTENER</h1>
   
   <div className="login-body">
      <div className="menu-class" >
      <ul className="menu-container">
        <li><Link to="/signup"><h3>Sign Up</h3></Link></li> 
        <li><Link to="/signin"><h3>Signin</h3></Link></li>
        <li><Link to="/forgot"><h3>Forgot Password</h3></Link></li>
        </ul>
      </div>
      <div className="picture-container">
        {/* <img src="https://www.shutterstock.com/image-vector/url-shortener-man-pushes-address-260nw-2201694049.jpg" 
        width={300}
        alt="url-short"/> */}
      </div>
   </div>
   
   </div>
  )
}