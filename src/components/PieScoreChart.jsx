import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { USER_MAIN_DATA } from "../__mocks__/mock";
function PieScoreChart() {
  const score = USER_MAIN_DATA[1].todayScore;
  const toDo = 1 - score;
  console.log("score: " + score + " To do: " + toDo);
  const data = [
    { name: "score", value: toDo, stroke: "white" },
    { name: "score", value: score, stroke: "red" },
    { reference: 1 },
  ];
  const COLORS = ["transparent", "red"];
  const setLegend = () => {
    return (
        <div className="pie__legend">
          <p>
            score
          </p>
        </div>
    );
  };
  return (
    <div className="chart__square pie">
      <ResponsiveContainer>
        <PieChart margin={{ top: 0, bottom: 0 }}>
        
          <Pie
            data={data}
            dataKey="reference"
            fill="white"
            outerRadius="60%"
            isAnimationActive={false}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="68%"
            cornerRadius={20}
            startAngle={180}
            endAngle={540}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <text
          x={200 / 1.5}
          y={310/2}
          fill="black"
          textAnchor="middle"
          dominantBaseline="right"
        >
          <tspan fontSize="26">{score * 100}%</tspan>
          
        </text>
        <text
          x={200 / 1.5}
          y={350/2}
          fill="#74798C"
          textAnchor="middle"
          dominantBaseline="right">
        <tspan fontSize={16} width="9px">de votre</tspan>
        </text>
        <text
          x={200 / 1.5}
          y={380/2}
          fill="#74798C"
          textAnchor="middle"
          dominantBaseline="right">
        <tspan fontSize={16} width="9px">objectif</tspan>
        </text>
          <Legend className="pie__legend" verticalAlign="top" align="middle" content={setLegend}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieScoreChart;
