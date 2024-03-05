import "../App.css";
import { TopHired2023 } from "../components/charts/googlesheet/topHired2023";
import { PpoStats2023 } from "../components/charts/googlesheet/ppoStats2023";
import { YearlyStats2023 } from "../components/charts/googlesheet/yearlyStats2023";

import { BackToHome } from "../components/backButtons/backToHome";

import { DataProvider2023, useData2023 } from "../context/context2023";

export const V2023 = () => {
  return (
    <>
      <DataProvider2023>
        <center>
          <h1 className="visualH1">
            Visualization 2023-24 <BackToHome />
          </h1>
          <div className="Charts-Scrollable">
            <TopHired2023 year="2023-24" Context={useData2023} />
            <PpoStats2023 year="2023-24" Context={useData2023} />
            <YearlyStats2023 year="2023-24" Context={useData2023} />
          </div>
        </center>
      </DataProvider2023>
    </>
  );
};
