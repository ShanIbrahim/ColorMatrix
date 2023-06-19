import React, { useState } from "react";
import _ from "lodash";
import "./ColorRow.css";

interface ColorRowType {
  data: number[][];
  row: number[];
}

// Helper
function getMinMax(data: number[][]) {
  const min = Math.min(...data.map((r) => Math.min(...r)));
  const max = Math.max(...data.map((r) => Math.max(...r)));
  return { min, max };
}

// Main function
function getColor(value: number, data: number[][]) {
  const { min, max } = getMinMax(data);
  const rawValue = Math.floor(((value - min) / (max - min)) * 255);
  const formattedValue =
    rawValue.toString(16).length < 2
      ? `0${rawValue.toString(16)}`
      : rawValue.toString(16).substring(0, 2);
  return `#${formattedValue}85F5`;
}

const ColorRow = (props: ColorRowType) => {
  const { data, row } = props;
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  return (
    <>
      {_.map(row, (value) => (
        <div
          className="box"
          style={{ backgroundColor: `${getColor(value, data)}` }}
          onMouseMove={() => setHoverValue(value)}
          onMouseLeave={() => setHoverValue(null)}
        />
      ))}
      {hoverValue && <div className="value">Value: {hoverValue}</div>}
    </>
  );
};

export default ColorRow;
