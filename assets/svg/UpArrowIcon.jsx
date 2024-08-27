import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UpArrowSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="#FF6B6B"
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
  </Svg>
);
export default UpArrowSvg;
