import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="main">
        <Link to="/">
          <button className="btn btn-dark" title="Return Home">Tabular format ⏩</button>
        </Link>
        <Link to="/company2020">
          <button className="btn btn-primary">
            <b>2020-21</b>
          </button>
        </Link>
        <Link to="/company2020PPO">
          <button className="btn btn-primary">
            <b>2020-21 PPO</b>
          </button>
        </Link>

        <Link to="/company2021">
          <button className="btn btn-warning">
            <b>2021-22</b>
          </button>
        </Link>
        <Link to="/company2021PPO">
          <button className="btn btn-warning">
            <b>2021-22 PPO</b>
          </button>
        </Link>

        <Link to="/company2022">
          <button className="btn btn-success">
            <b>2022-23</b>
          </button>
        </Link>
        <Link to="/company2022PPO">
          <button className="btn btn-success">
            <b>2022-23 PPO</b>
          </button>
        </Link>

        <Link to="/company2023">
          <button className="btn btn-danger">
            <b>2023-24 PPO</b>
          </button>
        </Link>
      </div>
    </>
  );
};
