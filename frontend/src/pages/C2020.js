import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import {BackToHome} from "../components/backToHome";
import {api2020} from "../configs/config";

export const C2020 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(api2020)
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
          <h2>It will take 30 sec to load data...</h2>
          <h2>As it is hosted for free!!</h2>
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <center>
      <h1 style={{ margin: "1vh" }}>2020-21<BackToHome/></h1>
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
