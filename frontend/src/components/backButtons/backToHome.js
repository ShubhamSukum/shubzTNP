import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export const BackToHome = () => {
  return (
    <Link to={"/"}>
      <button
        className="button-aahe btn btn-success">
        <b>Return Home</b>
      </button>
    </Link>
  );
};
