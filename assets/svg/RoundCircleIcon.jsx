import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RoundCircleSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={8}
    height={8}
    fill={"#FFAB2E"}
    viewBox="0 0 25.334 25.334"
    {...props}
  >
    <Path d="M25.334 12.667c0 6.996-5.672 12.667-12.668 12.667C5.672 25.334 0 19.663 0 12.667S5.672 0 12.666 0c6.996 0 12.668 5.671 12.668 12.667z" />
  </Svg>
);
export default RoundCircleSvg;
