import "../App.css";
import { TopHired } from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import { DepartmentStats } from "../components/charts/departmentStats";
import { TopSalary } from "../components/charts/topSalary";
import { PpoStats } from "../components/charts/ppoStats";
import { YearlyStat } from "../components/charts/yearlyStat";

import { BackToHome } from "../components/backToHome";

import { DataProvider, useData } from "../context/context2022";

export const V2022 = () => {
  return (
    <>
      <DataProvider>
        <center>
          <h1 style={{ marginBottom: "4vh" }}>
            Visualization for 2022-23 <BackToHome />
          </h1>
          <div className="Charts-Scrollable">
            <TopHired year="2022-23" Context={useData}/>
            <TopInvestors year="2022-23" Context={useData}/>
            <DepartmentStats year="2022-23" Context={useData}/>
            <TopSalary year="2022-23" Context={useData}/>
            <PpoStats year="2022-23" Context={useData}/>
            <YearlyStat year="2022-23" Context={useData}/>
          </div>
        </center>
      </DataProvider>
    </>
  );
};
