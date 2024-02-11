import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "../../App.css";

const DepartmentStats = (props) => {
  const [itData, setItData] = useState(null);
  const [ceData, setCeData] = useState(null);
  const [entcData, setEntcData] = useState(null);

  const { data, error, loading } = props.Context();

  useEffect(() => {
    if (Array.isArray(data)) {
      const sumIT = data.reduce((total, company) => total + company.IT, 0);
      const sumCE = data.reduce((total, company) => total + company.CE, 0);
      const sumENTC = data.reduce((total, company) => total + company.ENTC, 0);

      const remainingInvestmentIt = 240 - sumIT;
      const remainingInvestmentCe = 320 - sumCE;
      const remainingInvestmentEntc = 320 - sumENTC;

      const chartDataIT = {
        labels: [
          "Placed [" + sumIT + "]",
          "Remaining [" + remainingInvestmentIt + "] out of 240",
        ],
        datasets: [
          {
            data: [sumIT, remainingInvestmentIt],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      };

      const chartDataCE = {
        labels: [
          "Placed [" + sumCE + "]",
          "Remaining [" + remainingInvestmentCe + "] out of 320",
        ],
        datasets: [
          {
            data: [sumCE, remainingInvestmentCe],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      };

      const chartDataEntc = {
        labels: [
          "Placed [" + sumENTC + "]",
          "Remaining [" + remainingInvestmentEntc + "] out of 320",
        ],
        datasets: [
          {
            data: [sumENTC, remainingInvestmentEntc],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      };

      setItData(chartDataIT);
      setCeData(chartDataCE);
      setEntcData(chartDataEntc);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dept-init">
      <h1>Department-wise Stats in {props.year}</h1>
      <div className="pie-arranging">
        <div className="pie-box">
          <h3>Students Placed in CE</h3>
          {ceData && <Pie data={ceData} height={150} width={300} />}
        </div>
        <div className="pie-box">
          <h3>Students Placed in IT</h3>
          {itData && <Pie data={itData} height={150} width={300} />}
        </div>
        <div className="pie-box">
          <h3>Students Placed in ENTC</h3>
          {entcData && <Pie data={entcData} height={150} width={300} />}
        </div>
      </div>
    </div>
  );
};

export { DepartmentStats };
