// css
import "./Chart.css";

// components
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const totalMaximum = Math.max( // Math.max() returns the largest of zero or more numbers
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // key is a special prop that React expects to be present on every element that we return from a list
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
