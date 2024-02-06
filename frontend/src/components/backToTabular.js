import React from "react";
import { Link } from "react-router-dom";

export const BackToTabular = () => {
  return (
    <Link to={"/tabular"}>
      <button
        className="btn btn-success"
        style={{ marginLeft: "5vh", marginBottom: "1vh" }}
      >
        <b>Back</b>
      </button>
    </Link>
  );
};
