import React from 'react';
import "./navbar.css"

import {GoogleLogin} from "@react-oauth/google";
import JWTdecode from "jwt-decode";

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
    </div>
  </>)
}
