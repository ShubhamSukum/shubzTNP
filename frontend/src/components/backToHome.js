import React from "react";
import { Link } from "react-router-dom";

export const BackToHome = () => {
  return (
    <Link to={"/"}>
      <button className="btn btn-success" style={{marginLeft:"5vh",marginBottom:"1vh"}}>
        <b>Return Home</b>
      </button>
    </Link>
  );
};
