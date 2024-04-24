import React, { useEffect, useState } from "react";
import "../../../App.css";

export const YearlyStats2023 = (props) => {
  const [placedStud, setPlacedStud] = useState("");
  const [ppo, setPpo] = useState("");

  const { data, loading, error } = props.Context();

  useEffect(() => {
    if (Array.isArray(data)) {
      const filteredData = data
        .slice(1)
        .filter((company) => !company.Company.endsWith("_ppo"));
      const placed = filteredData
        .slice(1)
        .reduce((total, company) => total + company.Total, 0);
      const filteredDataPpo = data
        .slice(1)
        .filter((company) => company.Company.endsWith("_ppo"));
      const totalPpo = filteredDataPpo.reduce(
        (total, company) => total + company.Total,
        0
      );
      setPlacedStud(placed);
      setPpo(totalPpo);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Yearly Stats for {props.year}</h1>
      <br />
      <div className="yearly-stats-box">
        <button className="btn btn-success">
          <b>{placedStud}</b> students got placed in <b>2023-24</b>
          <hr />
          Total <b style={{ fontSize: "4vh" }}>{placedStud + ppo}</b> students
          got placed including <b>PPO</b>
        </button>
        <button className="btn btn-warning">
          <b style={{ fontSize: "4vh" }}>{ppo}</b> students got PPO in 2023-24
        </button>
        <button className="btn btn-danger">
          <b style={{ fontSize: "3vh" }}>{880 - (placedStud + ppo)}</b> students
          are still remaining in 2023-24
        </button>
      </div>
    </>
  );
};
