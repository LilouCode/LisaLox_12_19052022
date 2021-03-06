import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import PropTypes from "prop-types";
import Loader from "../pages/Loader";

/**
 * 
 * @param {object} dataActivity - from useFetch() 
 * @param {boolean} isLoading - from useFetch()
 * @returns The components returns a bar chat based on the user carbs and weight
 */
const BarWeightChart = ({dataActivity, isLoading}) => {

  const data = dataActivity.sessions;
  const CustomTooltip = ({ active, payload }) => {
    
    if (active && payload && payload.length) {
      return (
        <div className="weigth-tooltip">
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  const getDay = (date) => {
    let day = date.split("-")[2];
    day = day[0] === "0" ? day[1] : day;
    return day;
  };
  return (
    <div className="weight-chart">
      {isLoading? <Loader/>:
      <BarChart
      width={835}
      height={320}
      barGap={8}
      barSize={8}
      data={data}
      margin={{
        left: 20,
        top: 40,
        right: 10,
        bottom: 10,
      }}>
      
        <text
          x={200 / 2}
          y={50}
          fill="black"
          textAnchor="middle"
          dominantBaseline="right"
        >
          <tspan fontSize="14">Activité quotidienne</tspan>
        </text>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickFormatter={getDay} />
        <YAxis
          tickLine={false}
          axisLine={false}
          yAxisId="kilogram"
          dataKey="kilogram"
          domain={["dataMin - 3", "dataMax + 3"]}
          orientation="right"
        />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          domain={["dataMin - 80", "dataMax + 80"]}
          hide
        />
        <Tooltip content={<CustomTooltip />}/>
        <Legend
          iconType="circle"
          iconSize="8"
          verticalAlign="top"
          height={80}
          align="right"
        />
        <Bar
          name="Poids (kg)"
          yAxisId="kilogram"
          dataKey="kilogram"
          fill="#282D30"
          radius={[3.5, 3.5, 0, 0]}
        />
        <Bar
          name="Calories brûlées (kCal)"
          yAxisId="calories"
          dataKey="calories"
          fill="#E60000"
          radius={[3.5, 3.5, 0, 0]}
        />
      </BarChart>}
    </div>
  );
};

BarWeightChart.propTypes = {
  dataActivity : PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default BarWeightChart;
