import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export const PpoStats2023 = (props) => {
  const [topCompaniesData, setTopCompaniesData] = useState([]);
  const { data, error, loading } = props.Context();

  useEffect(() => {
    if (Array.isArray(data)) {
      const filteredData = data
        .slice(1)
        .filter((company) => company.Company.endsWith("_ppo"));
      const sortedData = filteredData.sort((a, b) => b.Total - a.Total);
      const top10Companies = sortedData.slice(0, 10);

      const chartData = {
        labels: top10Companies.map((company) =>
          removeSuffix(company.Company, "_ppo")
        ),
        datasets: [
          {
            label: "PPO students",
            backgroundColor: "rgba(75,192,192,0.6)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(75,192,192,0.8)",
            hoverBorderColor: "rgba(75,192,192,1)",
            data: top10Companies.map((company) => company.Total),
          },
        ],
      };
      setTopCompaniesData(chartData);
    }
  }, [data]);

  const removeSuffix = (str, suffix) => {
    if (str.endsWith(suffix)) {
      return str.slice(0, -suffix.length);
    }
    return str;
  };

  if (loading) {
    return <div>Loading... It might take 30 secs</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="c2023TopHired">
          <h3>PPO Given by companies in {props.year}</h3>
          <Bar
            data={topCompaniesData}
            options={{
              scales: {
                y: {
                  type: "linear",
                  beginAtZero: true,
                },
              },
              maintainAspectRatio:false,
              responsive:true
            }}
          />
        </div>
      </div>
    </>
  );
};
