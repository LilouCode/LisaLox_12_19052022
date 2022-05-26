import { USER_AVERAGE_SESSIONS } from "../__mocks__/mock";
import { USER_ACTIVITY } from "../__mocks__/mock";
import {
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const dataGoals = USER_AVERAGE_SESSIONS[1].sessions;
const dataDate = USER_ACTIVITY[1].sessions;
console.log(dataGoals);

function LineSessionChart() {
    const formatDay = (num)=>{
        const date = new Date (dataDate[num-1].day);
        const week = ["D","L","M","M","J","V","S"];
        const dayOfTheWeek = date.getDay()
        return (week[dayOfTheWeek])
    }
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
  return (
    <div className="chart__square line">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataGoals}
          margin={{
            top: 30,
            right: 2,
            left: 2,
            bottom: 30,
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="day"
            tickFormatter={formatDay}
            tick={{ fill: "white", opacity: ".7" }}
            tickLine={false}
            tickMargin={15}
            axisLine={false}
            interval={"preserveStartEnd"}
          />
          <YAxis
            type="number"
            domain={["dataMin -10", "dataMax +10"]}
            tickLine={false}
            axisLine={false}
            tickMargin={0}
            padding={{ top: 0, bottom: 0 }}
            allowDataOverflow={true}
            hide
          />
          <text x={200 / 2} y={50} fill="white" textAnchor="middle" dominantBaseline="right">
            <tspan fontSize="14">Durée moyenne des sessions</tspan>
          </text>
          <Tooltip content={<CustomTooltip />} animationEasing="ease-out"/>
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
