import "../App.css";
import { TopHired } from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import { DepartmentStats } from "../components/charts/departmentStats";
import { TopSalary } from "../components/charts/topSalary";
import { PpoStats } from "../components/charts/ppoStats";
import { YearlyStat } from "../components/charts/yearlyStat";

import { BackToHome } from "../components/backToHome";

import { DataProvider } from "../context/context2021";

export const V2021 = () => {
  return (
    <>
      <DataProvider>
        <center>
          <h1 style={{ marginBottom: "4vh" }}>
            Visualization for 2021-22 <BackToHome />
          </h1>
          <div className="Charts-Scrollable">
            <TopHired year="2021-22"/>
            <TopInvestors year="2021-22"/>
            <DepartmentStats year="2021-22"/>
            <TopSalary year="2021-22"/>
            <PpoStats year="2021-22"/>
            <YearlyStat year="2021-22"/>
          </div>
        </center>
      </DataProvider>
    </>
  );
};
