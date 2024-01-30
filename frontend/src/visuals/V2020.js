import "../App.css";
import {TopHired} from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import { DepartmentStats } from "../components/charts/departmentStats";

export const V2020 = () => {

  return (
    <>
      <center>
        <div className="Charts-Scrollable">
        <TopHired />
        <TopInvestors/>
        <DepartmentStats/>
        </div>
        
      </center>
    </>
  )
}
