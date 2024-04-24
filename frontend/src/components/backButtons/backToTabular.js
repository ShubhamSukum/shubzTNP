import React from "react";
import { Link } from "react-router-dom";

export const BackToTabular = () => {
  return (
    <Link to={"/tabular"}>
      <button className="button-aahe btn btn-success">
        <b>Back</b>
      </button>
    </Link>
  );
};
