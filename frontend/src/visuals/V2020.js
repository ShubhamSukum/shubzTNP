import "../App.css";
import { TopHired } from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import { DepartmentStats } from "../components/charts/departmentStats";
import { TopSalary } from "../components/charts/topSalary";
import { PpoStats } from "../components/charts/ppoStats";
import { YearlyStat } from "../components/charts/yearlyStat";

import { BackToHome } from "../components/backToHome";

import { DataProvider2020, useData2020 } from "../context/context2020";

export const V2020 = () => {
  return (
    <>
      <DataProvider2020>
        <center>
          <h1 className="visualH1">
            Visualization for 2020-21 <BackToHome />
          </h1>
          <div className="Charts-Scrollable">
            <TopHired year="2020-21" Context={useData2020} />
            <TopInvestors year="2020-21" Context={useData2020} />
            <DepartmentStats year="2020-21" Context={useData2020} />
            <TopSalary year="2020-21" Context={useData2020} />
            <PpoStats year="2020-21" Context={useData2020} />
            <YearlyStat year="2020-21" Context={useData2020} />
          </div>
        </center>
      </DataProvider2020>
    </>
  );
};
