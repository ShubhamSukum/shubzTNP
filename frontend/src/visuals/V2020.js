import React, { useEffect, useState } from "react";
import {TopHired} from "../components/charts/topHired";
import { TopInvestors } from "../components/charts/topInvestment";
import "../App.css";

export const V2020 = () => {

  return (
    <>
      <center>
        <div className="Charts-Scrollable">
        <TopHired />
        <TopInvestors/>
        </div>
        
      </center>
    </>
  )
}
