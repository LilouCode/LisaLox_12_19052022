import React from "react";
import Header from "../components/Header";
import BarWeightChart from "../components/BarWeightChart";
import LineSessionChart from "../components/LineSessionChart";
import PieScoreChart from "../components/PieScoreChart";
import RadarPerformanceChart from "../components/RadarPerformanceChart";
import KeyInfos from "../components/KeyInfos";
import calories from "../assets/svg/calories.svg";
import proteins from "../assets/svg/proteins.svg";
import carbs from "../assets/svg/carbs.svg";
import lipids from "../assets/svg/lipids.svg";
import {useFetch} from '../service/service';
import Loader from "./Loader";

/**
 * This function renders the dashboard.
 * @returns The Dashboard component returns a div element with all the graphics
 */
function Dashboard() {
  // Data are displayed only after loading
  const { data, dataActivity, dataSessions, dataPerformance, isLoading } = useFetch();
  return (
    <div className="dashboard">
        {isLoading? <Loader/>
        : 
          <Header
        title={ data.userInfos.firstName}
        subtitle="Félicitation ! Vous avez explosé vos objectifs hier 👏"
      />
      }
      
      <div className="main">
        <div className="charts">
          <div>
            {isLoading? <Loader/> :
            <BarWeightChart dataActivity={dataActivity} isLoading={isLoading}/>
            }
          </div>
          <div className="charts__grid">
            <LineSessionChart dataActivity={dataActivity} dataSessions={dataSessions} isLoading={isLoading} />
            <RadarPerformanceChart dataPerformance={dataPerformance} isLoading={isLoading} />
            <PieScoreChart data={data} isLoading={isLoading} />
          </div>
        </div>
        <div className="asside">
          <KeyInfos
            className="icon icon--calories"
            src={calories}
            name="calories"
            keyInfo={!isLoading? data.keyData.calorieCount :null}
          />
          <KeyInfos
            className="icon icon--proteins"
            src={proteins}
            name="protéines"
            keyInfo={!isLoading? data.keyData.proteinCount : null}
          />
          <KeyInfos
            className="icon icon--carbs"
            src={carbs}
            name="glucides"
            keyInfo={!isLoading? data.keyData.carbohydrateCount : null}
          />
          <KeyInfos
            className="icon icon--lipids"
            src={lipids}
            name="lipides"
            keyInfo={!isLoading? data.keyData.lipidCount : null}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
