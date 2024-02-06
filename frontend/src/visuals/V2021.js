import "../App.css";
import { TopHired } from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import { DepartmentStats } from "../components/charts/departmentStats";
import { TopSalary } from "../components/charts/topSalary";
import { PpoStats } from "../components/charts/ppoStats";
import { YearlyStat } from "../components/charts/yearlyStat";

import { BackToHome } from "../components/backToHome";

import { DataProvider2021, useData2021 } from "../context/context2021";

export const V2021 = () => {
  return (
    <>
      <DataProvider2021>
        <center>
          <h1 style={{ marginBottom: "4vh" }}>
            Visualization for 2021-22 <BackToHome />
          </h1>
          <div className="Charts-Scrollable">
            <TopHired year="2021-22" Context={useData2021}/>
            <TopInvestors year="2021-22" Context={useData2021}/>
            <DepartmentStats year="2021-22" Context={useData2021}/>
            <TopSalary year="2021-22" Context={useData2021}/>
            <PpoStats year="2021-22" Context={useData2021}/>
            <YearlyStat year="2021-22" Context={useData2021}/>
          </div>
        </center>
      </DataProvider2021>
    </>
  );
};
