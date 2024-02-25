import React from "react";
import "../components/navbar.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="home-page">
        <h1 className="h1trackTNP">
          <span className="spanTrack">T</span>
          rack
          <span className="spanTNP">TNP</span>
          <span className="centering">
            <button id="spanSpacing" className="btn btn-secondary">
              <h4 id="spanFont1" className="fw-bold">
                bit.ly/tracktnp
              </h4>
            </button>

            <button id="spanSpacing" className="btn btn-secondary">
              <h4 id="spanFont2" className="fw-bold">
                About
              </h4>
            </button>
          </span>
        </h1>
        <h3 className="h3Margin">
          Unleashes the Power of Visualized College Placement Reports.
        </h3>

        <Link to={"/visualize2020"}>
          <button className="visualize-button btn btn-primary">
            <b>Visualize 2020-21 Data</b>
          </button>
        </Link>
        <br />
        <Link to={"/visualize2021"}>
          <button
            className="visualize-button btn btn-warning"
            style={{ color: "white" }}
          >
            <b>Visualize 2021-22 Data</b>
          </button>
        </Link>
        <br />
        <Link to={"/visualize2022"}>
          <button className="visualize-button btn btn-success">
            <b>Visualize 2022-23 Data</b>
          </button>
        </Link>
        <br />
        <Link to={"/visualize2023"}>
          <button className="visualize-button btn btn-danger">
            <b>Visualize 2023-24 Data</b>
          </button>
        </Link>
      </div>
    </>
  );
};
