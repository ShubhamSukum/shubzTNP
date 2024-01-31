import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { BackToHome } from "../components/backToHome";
import {api2022} from "../configs/config";

export const C2022 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(api2022)
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
    <center>
      <h1 style={{ margin: "1vh" }}>2022-23<BackToHome/></h1>
      <div id="table-wrapper">
        <div id="table-scroll">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="sticky-header">
                  <center>Company</center>
                </th>
                <th className="sticky-header">
                  <center>Pointer</center>
                </th>
                <th className="sticky-header">
                  <center>Branch</center>
                </th>
                <th className="sticky-header">
                  <center>Total</center>
                </th>
                <th className="sticky-header">
                  <center>Salary</center>
                </th>
                <th className="sticky-header">
                  <center>Date</center>
                </th>
                <th className="sticky-header">
                  <center>Investment</center>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((info) => {
                const dateString = info.date;
                const dateObject = new Date(dateString);
                const year = dateObject.getFullYear();
                const month = dateObject.getMonth() + 1;
                const day = dateObject.getDate();

                const formattedDate = `${day < 10 ? "0" : ""}${day}-${
                  month < 10 ? "0" : ""
                }${month}-${year}`;
                return (
                  <tr key={info._id}>
                    <td>{info.company}</td>
                    <td>{info.pointer}</td>
                    <td>{info.branch}</td>
                    <td>{info.total}</td>
                    <td>{info.salary}</td>
                    <td>{formattedDate}</td>
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
