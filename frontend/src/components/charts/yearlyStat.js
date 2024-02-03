import React, { useEffect, useState } from "react";
import "../../App.css";

export const YearlyStat = (props) => {
  const [placedStud, setPlacedStud] = useState("");
  const [invest, setInvest] = useState("");

  const [ppo, setPpo] = useState("");
  const [investPpo, setInvestPpo] = useState(""); 

  const { data, dataPpo, error, errorPpo, loading, loadingPpo } = props.Context();

  useEffect(() => {
    // for Normal
    if (Array.isArray(data)) {
      const placed = data.reduce((total, company) => total + company.total, 0);
      const invested = data.reduce(
        (total, company) => total + company.investment,
        0
      );

      setInvest(invested.toFixed(2));
      setPlacedStud(placed);
    }
    // for Normal

    // For PPO
    if (Array.isArray(dataPpo)) {
      const totalPpo = dataPpo.reduce(
        (total, company) => total + company.total,
        0
      );
      const invested = dataPpo.reduce(
        (total, company) => total + company.investment,
        0
      );

      setInvestPpo(invested.toFixed(2));
      setPpo(totalPpo);
    }
    // For PPO
  }, [data, dataPpo]);

  if (loading || loadingPpo) {
    return <div>Loading...</div>;
  }

  if (error || errorPpo) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Yearly Stats for {props.year}</h1>
      <br />
      <div className="yearly-stats-box" style={{ marginBottom: "10vh" }}>
        <button className="btn btn-success">
          <b>{placedStud}</b> students got placed in 2020-21
        </button>
        <button className="btn btn-primary">
          Companies invested over <b>{invest} Lakhs</b> on PICT students in
          2020-21
        </button>
        <button className="btn btn-success">
          <b>{ppo}</b> students got PPO in 2020-21
        </button>
        <button className="btn btn-primary">
          Companies invested over <b>{investPpo}</b> Lakhs in PICT students PPO
          in 2020-21
        </button>
      </div>
    </>
  );
};
