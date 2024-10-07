import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const RoundCircleSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Circle cx={5} cy={5} r={5} fill="#FFAB2E" />
  </Svg>
);
export default RoundCircleSvg;
