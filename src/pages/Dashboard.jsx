// import { useParams} from "react-router-dom";
import Header from "../components/Header";
import BarWeightChart from "../components/BarWeightChart";
import LineSessionChart from "../components/LineSessionChart";
import PieScoreChart from "../components/PieScoreChart";
import RadarPerformanceChart from "../components/RadarPerformanceChart";
import KeyInfos from "../components/KeyInfos";
import calories from '../assets/svg/calories.svg';
import proteins from '../assets/svg/proteins.svg';
import carbs from '../assets/svg/carbs.svg';
import lipids from '../assets/svg/lipids.svg';
import { USER_MAIN_DATA } from "../__mocks__/mock.js";

function Dashboard() {
  let userMain = USER_MAIN_DATA[1];
  // const userActivity = USER_ACTIVITY[0];
  // const userSession = USER_AVERAGE_SESSIONS[0];
  // const userPerformance = USER_PERFORMANCE[0];
  return (
    <div className="dashboard">
      <Header
        title={userMain.userInfos.firstName}
        subtitle="Félicitation ! Vous avez explosé vos objectifs hier 👏"
      />
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
          <KeyInfos className="icon icon--calories" src={calories} name="calories" keyInfo={userMain.keyData.calorieCount}/>
          <KeyInfos className="icon icon--proteins" src={proteins} name="protéines" keyInfo={userMain.keyData.proteinCount}/>
          <KeyInfos className="icon icon--carbs" src={carbs} name="glucides" keyInfo={userMain.keyData.carbohydrateCount}/>
          <KeyInfos className="icon icon--lipids" src={lipids} name="lipides" keyInfo={userMain.keyData.lipidCount}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;