import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useData } from "../../context/context2020";

const TopInvestors = (props) => {
  const [topInvestorsData, setTopInvestorsData] = useState([]);
  const {data,error,loading}=useData();

  useEffect(() => {
        if (Array.isArray(data)) {
          const sortedData = data.sort((a, b) => b.investment - a.investment);
          const top10Investors = sortedData.slice(0, 10);

          const chartData = {
            labels: top10Investors.map((investor) => investor.company),
            datasets: [
              {
                label: "Total Investment in Lacs",
                backgroundColor: "rgba(75,192,192,0.6)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(75,192,192,0.8)",
                hoverBorderColor: "rgba(75,192,192,1)",
                data: top10Investors.map((investor) => investor.investment),
              },
            ],
          };
          setTopInvestorsData(chartData);
        }
  }, [data]);

  if (loading) {
    return <div>Loading... As it's hosted for FREE</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container-fluid">
        <div style={{ height: "60vh", width: "80vw", marginBottom: "10vh" }}>
          <h3>Top 10 Investors Companies in {props.year}</h3>
          <Bar
            data={topInvestorsData}
            options={{
              scales: {
                y: {
                  type: "linear",
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export { TopInvestors };
