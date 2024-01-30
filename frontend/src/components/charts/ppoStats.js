import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const PpoStats = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://tracktnp-backend.onrender.com/pict/2020ppo")
      .then((res) => {
        const data = res.data;

        if (Array.isArray(data)) {
          const companies = data.map((entry) => entry.company);
          const totalData = data.map((entry) => entry.total);
          const salaryData = data.map((entry) => entry.salary);

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
              }
            ],
          };

          setChartData(chartData);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Error fetching data.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ height: "60vh", width: "68vw", marginBottom: "10vh" }}>
      <h3>PPO Given by companies: Count & Salary</h3>
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
