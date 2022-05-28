import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { USER_PERFORMANCE } from "../__mocks__/mock";

const data = USER_PERFORMANCE[1].data;
// const kind = USER_PERFORMANCE[1].kind;
console.log("User performances:", data);

//traduction
const frenchTranslator = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};
const getTittle = (props) => {
  const { payload, x, y } = props;
  const value = payload.value;
  const side = payload.coordinate;

  return (
    <text
      x={x}
      y={payload.index === 3 ? y + 10 : y}
      textAnchor= {
        side >= -30 && Math.abs(side) !== 90
          ? "start"
          : Math.abs(side) === 90
          ? "middle"
          : "end"
      }
      margin={5}
      fill="white"
      fontSize="12"
    >
      {frenchTranslator[value]}
    </text>
  );
  // return frenchTranslator[num];
};

function RadarPerformanceChart() {
  return (
    <div className="chart__square radar">
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart
          data={data}
          margin={{ top: 30, bottom: 30, left: 30, right: 30 }}
          startAngle={30}
          endAngle={-330}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tick={getTittle} tickLine={false} />
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
            fillOpacity={0.85}
            animationEasing={"ease-out"}
            stroke="none"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default RadarPerformanceChart;
