import _ from "lodash";
import "./ColorMatrix.css";
import ColorRow from "./ColorRow";

interface ColorMatrixType {
  data: number[][];
}

const ColorMatrix = (props: ColorMatrixType) => {
  const { data } = props;

  return (
    <>
      {_.map(data, (row) => (
        <div className="matrix">
          <ColorRow data={data} row={row} />
        </div>
      ))}
    </>
  );
};

export default ColorMatrix;
