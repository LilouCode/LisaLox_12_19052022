import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import Loader from "../pages/Loader";
import {getTittle } from "../utils/helpers";
import PropTypes from "prop-types";

function RadarPerformanceChart({dataPerformance, isLoading}) {
  const data = dataPerformance.data;
  return (
    <div className="chart__square radar">
      <ResponsiveContainer height="100%" width="100%">
        {isLoading ? (
          <Loader />
        ) : (
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
        )}
      </ResponsiveContainer>
    </div>
  );
}
RadarPerformanceChart.propTypes = {
  dataPerformance: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}
export default RadarPerformanceChart;
