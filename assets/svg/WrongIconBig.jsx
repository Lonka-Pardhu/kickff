import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
const WrongBigSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Rect width={12} height={12} fill="#F25C54" rx={6} />
    <Rect
      width={5.796}
      height={1.195}
      fill="#fff"
      rx={0.597}
      transform="matrix(-.7071 -.7071 .7097 -.7045 7.627 8.465)"
    />
    <Rect
      width={5.796}
      height={1.195}
      fill="#fff"
      rx={0.597}
      transform="matrix(-.7071 .7071 -.7045 -.7097 8.465 4.376)"
    />
  </Svg>
);
export default WrongBigSvg;
