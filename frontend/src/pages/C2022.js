import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export const C2022 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://tracktnp-backend.onrender.com/pict/2022")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <center>
      <h1 style={{ margin: "1vh" }}>2022-23</h1>
      <div id="table-wrapper">
        <div id="table-scroll">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="sticky-header"><center>Company</center></th> 
                <th className="sticky-header"><center>Pointer</center></th> 
                <th className="sticky-header"><center>Branch</center></th> 
                <th className="sticky-header"><center>Total</center></th> 
                <th className="sticky-header"><center>Salary</center></th> 
                <th className="sticky-header"><center>Date</center></th> 
                <th className="sticky-header"><center>Investment</center></th> 
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
