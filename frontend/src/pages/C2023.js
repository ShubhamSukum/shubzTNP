import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { BackToHome } from "../components/backToHome";
import {api2023} from "../configs/config";

export const C2023 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(api2023)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data.");
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div className="loader-container">
          <div className="loader"></div>
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
    <>
      <center>
        <h1 style={{ margin: "1vh" }}>2023-24<BackToHome/></h1>

        <div id="table-wrapper">
          <div id="table-scroll">
            <table style={{ width: "80vh" }} className="table table-bordered">
              <thead>
                <tr>
                  <th className="sticky-header">
                    <center>Company</center>
                  </th>
                  <th className="sticky-header">
                    <center>Total</center>
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.slice(1).map((info, index) => {
                  return (
                    <tr key={index}>
                      <td>{info.Company}</td>
                      <td>{info.Total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </center>
    </>
  );
};
