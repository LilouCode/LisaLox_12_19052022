import { USER_AVERAGE_SESSIONS } from "../__mocks__/mock";
import { USER_ACTIVITY } from "../__mocks__/mock";
import {
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Line,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { useData } from "../utils/hooks";

////////Fonctions////////

function LineSessionChart() {
  const {dataActivity, dataSessions} = useData();
  const dataGoals = dataSessions.sessions? dataSessions.sessions: USER_AVERAGE_SESSIONS[1].sessions;
  const dataDate = dataActivity.sessions? dataActivity.sessions: USER_ACTIVITY[1].sessions;
  //Get day
const formatDay = (num) => {
  const date = new Date(dataDate[num - 1].day);
  const week = ["D", "L", "M", "M", "J", "V", "S"];
  const dayOfTheWeek = date.getDay();
  return week[dayOfTheWeek];
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="line-tooltip">
        <p>{`${payload[0].payload.sessionLength} min`}</p>
      </div>
    );
  }
  return null;
};

const CustomCursor = (props) => {
  if (props) {
    const { points, width, height } = props;
    const { x} = points[0];
    return (
      <Rectangle
        fill="hsl(0, 7%, 0%,9.72%)"
        x={x}
        width={width}
        height={height*2}
      />
    );
  }
  return null;
};
  return (
    <div className="chart__square line">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataGoals}
          margin={{
            top: 60,
            right: 0,
            left: 0,
            bottom: 30,
          }}

        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            className="line__day"
            dataKey="day"
            tickFormatter={formatDay}
            tick={{ fill: "white", opacity: ".5" }}
            tickLine={false}
            axisLine={false}
            tickMargin={15}
            interval={"preserveStartEnd"}
          />
          <YAxis
            type="number"
            domain={["dataMin -10", "dataMax +10"]}
            tickLine={false}
            axisLine={false}
            allowDataOverflow={true}
            hide
            dx={-10}
          />
          <Legend
            verticalAlign="top"
            align="left"
            content={() => (
              <div className="line__legend">
                Durée moyenne des
                <br />
                sessions
              </div>
            )}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            animationEasing="ease-out"
          />
          <Line
            dataKey="sessionLength"
            dot={false}
            stroke="white"
            strokeWidth={2}
            type="natural"
            scale="band"
            activeDot={{
              fill: "white",
              strokeOpacity: ".5",
              strokeWidth: "10",
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default LineSessionChart;
