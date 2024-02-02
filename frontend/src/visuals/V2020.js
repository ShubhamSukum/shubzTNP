import "../App.css";
import { TopHired } from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import { DepartmentStats } from "../components/charts/departmentStats";
import { TopSalary } from "../components/charts/topSalary";
import { PpoStats } from "../components/charts/ppoStats";
import { YearlyStat } from "../components/charts/yearlyStat";

import { BackToHome } from "../components/backToHome";

import { DataProvider, useData } from "../context/context2020";

export const V2020 = () => {
  return (
    <>
      <DataProvider>
        <center>
          <h1 style={{ marginBottom: "4vh" }}>
            Visualization for 2020-21 <BackToHome />
          </h1>
          <div className="Charts-Scrollable">
            <TopHired year="2020-21" />
            <TopInvestors year="2020-21"/>
            <DepartmentStats year="2020-21"/>
            <TopSalary year="2020-21"/>
            <PpoStats year="2020-21"/>
            <YearlyStat year="2020-21"/>
          </div>
        </center>
      </DataProvider>
    </>
  );
};
