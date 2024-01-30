import "../App.css";
import {TopHired} from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import { DepartmentStats } from "../components/charts/departmentStats";
import { TopSalary } from "../components/charts/topSalary";
import { PpoStats } from "../components/charts/ppoStats";

export const V2020 = () => {

  return (
    <>
      <center>
        <h1 style={{ marginBottom:"4vh" }}>Visualization for 2020</h1>
        <div className="Charts-Scrollable">
        <TopHired />
        <TopInvestors/>
        <DepartmentStats/>
        <TopSalary/>
        <PpoStats/>
        </div>
        
      </center>
    </>
  )
}
