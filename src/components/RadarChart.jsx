import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { USER_PERFORMANCE } from "../__mocks__/mock";

function RadarU() {
  const data = USER_PERFORMANCE[0].data;
  console.log(data);

  return (
    <RadarChart height={180} width={180} outerRadius="80%" data={data}>
      <PolarGrid fill="white" />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis />
      <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.5} />
    </RadarChart>
  );
}
export default RadarU;

