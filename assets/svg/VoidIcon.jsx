import * as React from "react"
import Svg, { Circle, Rect } from "react-native-svg"
const VoidSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Circle cx={5} cy={5} r={5} fill="#8A8A8E" />
    <Rect
      width={5.446}
      height={1.25}
      x={2.321}
      y={4.375}
      fill="#fff"
      rx={0.625}
    />
  </Svg>
)
export default VoidSvg
