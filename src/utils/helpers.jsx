//traduction
export const frenchTranslator = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
  
 export const getTittle = (props) => {
    const { payload, x, y } = props;
    const value = payload.value;
    const side = payload.coordinate;
  
    return (
      <text
        x={x}
        y={payload.index === 3 ? y + 10 : y}
        textAnchor={
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
  };