import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { BackToTabular } from "../components/backButtons/backToTabular";
import { api2023 } from "../configs/config";

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
          <br />
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
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: "1vh" }}>2023-24</h1>
          <span className="updating-live fw-bold">Updating Live...</span>
          <span style={{ marginTop: "1vh" }}>
            <BackToTabular />
          </span>
        </span>
        {/* </h1> */}

        <div className="C2023">
          <div id="table-scroll">
            <table className="table table-bordered table-sm table-hover">
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
