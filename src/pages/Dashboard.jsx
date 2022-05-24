// import { useParams} from "react-router-dom";
import Header from "../components/Header";
import WeightChart from "../components/WeightChart";
import Goals from "../components/Goals";
import Pie from "../components/Pie";
import RadarChart from "../components/RadarChart";
import { USER_MAIN_DATA } from "../__mocks__/mock.js";

function Dashboard() {
  let userMain = USER_MAIN_DATA[0];
  // const userActivity = USER_ACTIVITY[0];
  // const userSession = USER_AVERAGE_SESSIONS[0];
  // const userPerformance = USER_PERFORMANCE[0];
  return (
    <div className="dashboard">
      <Header
        title={userMain.userInfos.firstName}
        subtitle="Félicitation ! Vous avez explosé vos objectifs hier 👏"
      />
      <div>
        <div className="charts">
          <div>
            <WeightChart />
          </div>
          <div>
            <Goals />
            <RadarChart />
            <Pie />
          </div>
        </div>
        <div className="asside"></div>
      </div>
    </div>
  );
}

export default Dashboard;
