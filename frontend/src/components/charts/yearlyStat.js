import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import {api2020,api2020ppo} from "../../configs/config";

export const YearlyStat = () => {
  const [placedStud, setPlacedStud] = useState("");
  const [invest, setInvest] = useState("");

  const [ppo, setPpo] = useState("");
  const [investPpo, setInvestPpo] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(api2020)
      .then((res) => {
        const data = res.data;

        if (Array.isArray(data)) {
          const placed = data.reduce(
            (total, company) => total + company.total,
            0
          );
          const invested = data.reduce(
            (total, company) => total + company.investment,
            0
          );

          setInvest(invested.toFixed(2))
          setPlacedStud(placed);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Error fetching data.");
        setLoading(false);
      });

      axios
      .get(api2020ppo)
      .then((res) => {
        const data = res.data;

        if (Array.isArray(data)) {
          const totalPpo = data.reduce(
            (total, company) => total + company.total,
            0
          );
          const invested = data.reduce(
            (total, company) => total + company.investment,
            0
          );

          setInvestPpo(invested.toFixed(2))
          setPpo(totalPpo);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Error fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
        <h1>Yearly Stats</h1>
        <br/>
        <div className="yearly-stats-box" style={{marginBottom:"10vh"}}>
          <button className="btn btn-success"><b>{placedStud}</b> students got placed in 2020-21</button>
          <button className="btn btn-primary">Companies invested over <b>{invest} Lakhs</b> on PICT students in 2020-21</button>
          <button className="btn btn-success"><b>{ppo}</b> students got PPO in 2020-21</button>
          <button className="btn btn-primary">Companies invested over <b>{investPpo}</b> Lakhs in PICT students PPO in 2020-21</button>
      </div>
    </>
  );
};
