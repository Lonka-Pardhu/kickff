import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PickemSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16.339}
    height={16.339}
    {...props}
  >
    <Path
      fill={props.color}
      d="M8.17 0a8.17 8.17 0 1 0 8.17 8.17A8.179 8.179 0 0 0 8.17 0Zm-.062 10.5a1.349 1.349 0 0 1-.958.395 1.363 1.363 0 0 1-.964-.4L4.292 8.658l.948-.978 1.9 1.843 3.96-3.881.956.97L8.108 10.5Z"
      data-name="check-circle (3)"
    />
  </Svg>
);
export default PickemSvg;
