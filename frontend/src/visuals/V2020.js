import "../App.css";
import { TopHired } from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import { DepartmentStats } from "../components/charts/departmentStats";
import { TopSalary } from "../components/charts/topSalary";
import { PpoStats } from "../components/charts/ppoStats";
import { YearlyStat } from "../components/charts/yearlyStat";

import { BackToHome } from "../components/backToHome";

export const V2020 = () => {
  return (
    <>
      <center>
        <h1 style={{ marginBottom: "4vh" }}>
          Visualization for 2020-21 <BackToHome />
        </h1>
        <div className="Charts-Scrollable">
          <TopHired />
          <TopInvestors />
          <DepartmentStats />
          <TopSalary />
          <PpoStats />
          <YearlyStat />
        </div>
      </center>
    </>
  );
};
