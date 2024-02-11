import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const TopSalary = (props) => {
  const [topSalary, setTopSalary] = useState([]);
  const { data, error, loading } = props.Context();

  useEffect(() => {
    if (Array.isArray(data)) {
      const sortedData = data.sort((a, b) => b.salary - a.salary);
      const top10Salary = sortedData.slice(0, 10);

      const chartData = {
        labels: top10Salary.map((company) => company.company),
        datasets: [
          {
            label: "Highest Salary in Lacs",
            backgroundColor: "rgba(75,192,192,0.6)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(75,192,192,0.8)",
            hoverBorderColor: "rgba(75,192,192,1)",
            data: top10Salary.map((company) => company.salary),
          },
        ],
      };

      setTopSalary(chartData);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="bar-box">
          <h3>Top 10 Highest Salary Offered in {props.year}</h3>
          <Bar
            data={topSalary}
            options={{
              scales: {
                y: {
                  type: "linear",
                  beginAtZero: true,
                },
              },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </>
  );
};

export { TopSalary };
