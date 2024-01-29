import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export const C2023 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios
      .get("https://tracktnp-backend.onrender.com/pict/2023")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <>
      <center>
        <h1 style={{ margin: "1vh" }}>
          2023
        </h1>

        <div id="table-wrapper">
          <div id="table-scroll">
            <table style={{width:"80vh"}} className="table table-bordered">
              <thead>
                <tr>
                  <th className="sticky-header"><center>Company</center></th> 
                  <th className="sticky-header"><center>Total</center></th>
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
