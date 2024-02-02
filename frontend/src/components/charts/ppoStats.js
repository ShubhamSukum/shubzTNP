import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
// import axios from "axios";
// import { api2020ppo } from "../../configs/config";

import { useData } from "../../context/context2020";

const PpoStats = (props) => {
  const [chartData, setChartData] = useState(null);
  const { dataPpo, errorPpo, loadingPpo } = useData();

  useEffect(() => {
    if (Array.isArray(dataPpo)) {
      const companies = dataPpo.map((entry) => entry.company);
      const totalData = dataPpo.map((entry) => entry.total);
      const salaryData = dataPpo.map((entry) => entry.salary);

      const chartData = {
        labels: companies,
        datasets: [
          {
            type: "bar",
            label: "Total",
            data: totalData,
            backgroundColor: "rgba(75,192,192,0.6)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
          {
            type: "bar",
            label: "Salary in Lakhs",
            data: salaryData,
            backgroundColor: "rgba(255,99,132,0.6)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
          },
        ],
      };

      setChartData(chartData);
    }
  }, [dataPpo]);

  if (loadingPpo) {
    return <div>Loading...</div>;
  }

  if (errorPpo) {
    return <div>Error: {errorPpo}</div>;
  }

  return (
    <div style={{ height: "50vh", width: "60vw", marginBottom: "30vh" }}>
      <h3>PPO Given by companies: Count & Salary in {props.year}</h3>
      {chartData && (
        <div>
          <Bar
            data={{
              labels: chartData.labels,
              datasets: chartData.datasets.filter(
                (dataset) => dataset.type === "bar"
              ),
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export { PpoStats };
