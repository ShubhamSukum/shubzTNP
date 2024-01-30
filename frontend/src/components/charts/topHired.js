import { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const TopHired = () => {
  const [topCompaniesData, setTopCompaniesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://tracktnp-backend.onrender.com/pict/2020")
      .then((res) => {
        const data = res.data;

        if (Array.isArray(data)) {
          const sortedData = data.sort((a, b) => b.total - a.total);
          const top10Companies = sortedData.slice(0, 10);

          const chartData = {
            labels: top10Companies.map((company) => company.company),
            datasets: [
              {
                label: "Total Hires",
                backgroundColor: "rgba(75,192,192,0.6)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(75,192,192,0.8)",
                hoverBorderColor: "rgba(75,192,192,1)",
                data: top10Companies.map((company) => company.total),
              },
            ],
          };

          setTopCompaniesData(chartData);
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
    return <div>Loading... It might take 30 secs</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container-fluid">
        <div style={{ height: "60vh", width: "80vw", marginBottom: "10vh" }}>
          <h3>Top 10 Hiring Companies</h3>
          <Bar
            data={topCompaniesData}
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

export { TopHired };
