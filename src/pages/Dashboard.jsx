// import { useParams} from "react-router-dom";
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
// import { USER_MAIN_DATA } from "../__mocks__/mock.js";
import {useData} from "../utils/hooks"
import {useFetch} from '../service/service';
function Dashboard() {
  // let userMain = USER_MAIN_DATA[1];
  const { data, isLoading, error } = useFetch();
  // const {data, isLoading, error} = useData();
  
 
  return (
    <div className="dashboard">
        {isLoading? (
          <p>Chargement en cours...</p>
        ): (
          <Header
        title={ data.userInfos? data.userInfos.firstName: "?"}
        subtitle="Félicitation ! Vous avez explosé vos objectifs hier 👏"
      />
        )}
      
      <div className="main">
        <div className="charts">
          <div>
            <BarWeightChart />
          </div>
          <div className="charts__grid">
            <LineSessionChart />
            <RadarPerformanceChart />
            <PieScoreChart />
          </div>
        </div>
        <div className="asside">
          <KeyInfos
            className="icon icon--calories"
            src={calories}
            name="calories"
            keyInfo={data.keyData? data.keyData.calorieCount :null}
          />
          <KeyInfos
            className="icon icon--proteins"
            src={proteins}
            name="protéines"
            keyInfo={data.keyData? data.keyData.proteinCount : null}
          />
          <KeyInfos
            className="icon icon--carbs"
            src={carbs}
            name="glucides"
            keyInfo={data.keyData? data.keyData.carbohydrateCount : null}
          />
          <KeyInfos
            className="icon icon--lipids"
            src={lipids}
            name="lipides"
            keyInfo={data.keyData? data.keyData.lipidCount : null}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
