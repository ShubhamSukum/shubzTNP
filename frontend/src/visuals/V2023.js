import "../App.css";
import { TopHired2023 } from "../components/charts/googlesheet/topHired2023";
import { PpoStats2023 } from "../components/charts/googlesheet/ppoStats2023";
import { YearlyStats2023 } from "../components/charts/googlesheet/yearlyStats2023";

import { BackToHome } from "../components/backToHome";

import { DataProvider, useData } from "../context/context2023";

export const V2023 = () => {
  return (
    <>
      <DataProvider>
        <center>
          <h1 style={{ marginBottom: "4vh" }}>
            Visualization for 2023-24 <BackToHome />
          </h1>
          <div className="Charts-Scrollable">
            <TopHired2023 year="2023-24" Context={useData} />
            <PpoStats2023 year="2023-24" Context={useData} />
            <YearlyStats2023 year="2023-24" Context={useData} />
          </div>
        </center>
      </DataProvider>
    </>
  );
};
