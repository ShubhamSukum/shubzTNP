import { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const TopInvestors = () => {
  const [topInvestorsData, setTopInvestorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://tracktnp-backend.onrender.com/pict/2020")
      .then((res) => {
        const data = res.data;

        if (Array.isArray(data)) {
          const sortedData = data.sort((a, b) => b.investment - a.investment);
          const top10Investors = sortedData.slice(0, 10);

          const chartData = {
            labels: top10Investors.map((investor) => investor.company),
            datasets: [
              {
                label: "Total Investment",
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
          setLoading(false);
        } else {
          setError("Data is not in the expected format.");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Error fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container-fluid">
        <div style={{ height: "60vh", width: "80vw" }}>
          <h3>Top 10 Investors</h3>
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
