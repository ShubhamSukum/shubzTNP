import React from 'react';
import "./navbar.css"

import {GoogleLogin} from "@react-oauth/google";
import JWTdecode from "jwt-decode";
import {Link} from "react-router-dom";

export const Navbar = () => {

  return (<>
    <div className='main'>
        <GoogleLogin
          onSuccess={(res)=>{
            console.log(JWTdecode(res.credential));
          }}
          onError={()=>{
            console.error("Google Error Occured!!")
          }}
        />
        <Link to="/company">Company</Link>
        {/* <h1>Calender</h1> */}
    </div>
  </>)
}
