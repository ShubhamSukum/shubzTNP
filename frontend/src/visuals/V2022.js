import "../App.css";
import { TopHired } from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import { DepartmentStats } from "../components/charts/departmentStats";
import { TopSalary } from "../components/charts/topSalary";
import { PpoStats } from "../components/charts/ppoStats";
import { YearlyStat } from "../components/charts/yearlyStat";

import { BackToHome } from "../components/backButtons/backToHome";

import { DataProvider2022, useData2022 } from "../context/context2022";

export const V2022 = () => {
  return (
    <>
      <DataProvider2022>
        <center>
          <h1 className="visualH1">
            Visualization 2022-23 <BackToHome />
          </h1>
          <div className="Charts-Scrollable">
            <TopHired year="2022-23" Context={useData2022} />
            <TopInvestors year="2022-23" Context={useData2022} />
            <DepartmentStats year="2022-23" Context={useData2022} />
            <TopSalary year="2022-23" Context={useData2022} />
            <PpoStats year="2022-23" Context={useData2022} />
            <YearlyStat year="2022-23" Context={useData2022} />
          </div>
        </center>
      </DataProvider2022>
    </>
  );
};
