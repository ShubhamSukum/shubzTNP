import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const PpoStats = (props) => {
  const [chartData, setChartData] = useState(null);
  const { dataPpo, errorPpo, loadingPpo } = props.Context();

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
            label: "Total Students",
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
    <div className="marginTop-ppo">
      <h3>PPO Given by companies: Count & Salary in {props.year}</h3>
      {chartData && (
        <div className="ppo-stats-css">
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
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>
      )}
    </div>
  );
};

export { PpoStats };
