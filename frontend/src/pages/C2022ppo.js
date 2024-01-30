import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { BackToHome } from "../components/backToHome";

export const C2022ppo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://tracktnp-backend.onrender.com/pict/2022ppo")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Error fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div className="loader-container">
          <div class="loader"></div>
          <h2>Loading data...</h2>
          <br/>
          <h2>Please wait...</h2>
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <center>
      <h1 style={{ margin: "1vh" }}>2022-23 PPO<BackToHome/></h1>
      <div id="table-wrapper">
        <div id="table-scroll">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="sticky-header"><center>Company</center></th> 
                <th className="sticky-header"><center>Branch</center></th> 
                <th className="sticky-header"><center>Total</center></th> 
                <th className="sticky-header"><center>Salary</center></th> 
                <th className="sticky-header"><center>Investment</center></th>
              </tr>
            </thead>

            <tbody>
              {data.map((info) => {
                return (
                  <tr key={info._id}>
                    <td>{info.company}</td>
                    <td>{info.branch}</td>
                    <td>{info.total}</td>
                    <td>{info.salary}</td>
                    <td>{info.investment}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </center>
  );
};
