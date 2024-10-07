import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const WrongSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Rect width={10} height={10} fill="#F25C54" rx={5} />
    <Rect
      width={5.796}
      height={1.195}
      fill="#fff"
      rx={0.597}
      transform="matrix(-.7071 -.7071 .7097 -.7045 6.651 7.465)"
    />
    <Rect
      width={5.796}
      height={1.195}
      fill="#fff"
      rx={0.597}
      transform="matrix(-.7071 .7071 -.7045 -.7097 7.49 3.376)"
    />
  </Svg>
);
export default WrongSvg;
