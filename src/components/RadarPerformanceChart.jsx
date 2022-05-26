import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { USER_PERFORMANCE } from "../__mocks__/mock";

function RadarPerformanceChart() {
  const data = USER_PERFORMANCE[1].data;
  const kind = USER_PERFORMANCE[1].kind;
  console.log("User performances:", data);
  const getTittle = (num) => {
    return kind[num];
  };
  return (
    <div className="chart__square radar">
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart
          data={data}
          margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
        >
          <PolarGrid fill="white" />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={getTittle}
            fontSize="12"
            color="white"
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={30}
            type="number"
            tick={false}
            axisLine={false}
            tickCount="6"
            line="0"
          />
          <Radar
            dataKey="value"
            fill="red"
            fillOpacity={0.8}
            animationEasing={"ease-out"}
            stroke="none"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default RadarPerformanceChart;
