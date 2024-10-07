import Svg, { Path, Circle } from "react-native-svg";
const CheckCircleBigSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Circle cx={6} cy={6} r={6} fill="#31C163" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M9.471 5.04a.6.6 0 0 0 .002-.846l-.168-.17a.595.595 0 0 0-.844-.002L5.133 7.35 3.84 6.057a.6.6 0 0 0-.847-.002l-.17.168a.595.595 0 0 0 0 .844L4.694 8.94a.597.597 0 0 0 .198.13c.22.101.487.061.668-.12l3.91-3.91Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CheckCircleBigSvg;
