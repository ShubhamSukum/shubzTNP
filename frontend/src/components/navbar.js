import React from 'react';
import "./navbar.css"

// import {GoogleLogin} from "@react-oauth/google";
// import JWTdecode from "jwt-decode";
import {Link} from "react-router-dom";

export const Navbar = () => {

  return (<>
    <div className='main'> 
        <Link to="/company2020" className='nav-link'>2020</Link>
        <Link to="/company2020PPO" className='nav-link'>2020 PPO</Link>

        <Link to="/company2021" className='nav-link'>2021</Link>
        <Link to="/company2021PPO" className='nav-link'>2021 PPO</Link>

        <Link to="/company2022" className='nav-link'>2022</Link>
        <Link to="/company2022PPO" className='nav-link'>2022 PPO</Link>
    </div>
  </>)
}
