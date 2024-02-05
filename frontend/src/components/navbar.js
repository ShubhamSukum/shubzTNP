import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="centering">
        <div className="main">
          <Link to="/tabular">
            <button
              className="extra link-button fw-bold btn btn-primary"
              title="Structured into Table Format"
              // style={{ width: "34vw" }}
            >
              Tabular Data
            </button>
          </Link>

          <Link to="/">
            <button
              className="link-button fw-bold btn btn-success"
              title="Structured into Table Format"
            >
              Home
            </button>
          </Link>

          <Link to="/feedXP">
            <button
              className="link-button fw-bold btn btn-danger"
              title="Structured into Table Format"
            >
              Feed XP
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
