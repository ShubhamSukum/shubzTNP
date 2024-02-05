import React from "react";
import "../components/navbar.css";
import { Link } from "react-router-dom";

export const Tabular = () => {
  return (
    <>
      <div className="tabular-sizing home-page">
        <h1 style={{ fontSize: "7vh", marginTop: "9vh" }}>Tabular Data</h1>
        <br />

        <Link to={"/company2020"}>
          <button className="visualize-button btn btn-primary">
            <b>Tabular Data 2020-21</b>
          </button>
        </Link>
        <br />
        <Link to={"/company2020ppo"}>
          <button className="visualize-button btn btn-primary">
            <b>Tabular Data 2020-21 PPO</b>
          </button>
        </Link>

        <br />

        <Link to={"/company2021"}>
          <button className="visualize-button btn btn-warning">
            <b>Tabular Data 2021-22</b>
          </button>
        </Link>
        <br />
        <Link to={"/company2021ppo"}>
          <button className="visualize-button btn btn-warning">
            <b>Tabular Data 2021-22 PPO</b>
          </button>
        </Link>

        <br />

        <Link to={"/company2022"}>
          <button className="visualize-button btn btn-success">
            <b>Tabular Data 2020-23</b>
          </button>
        </Link>
        <br />
        <Link to={"/company2022ppo"}>
          <button className="visualize-button btn btn-success">
            <b>Tabular Data 2022-23 PPO</b>
          </button>
        </Link>

        <br />

        <Link to={"/company2023"}>
          <button className="visualize-button btn btn-danger">
            <b>Tabular Data 2023-24</b>
          </button>
        </Link>
        <br />
      </div>
    </>
  );
};
