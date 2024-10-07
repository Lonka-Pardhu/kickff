import Svg, { Path, Circle } from "react-native-svg";
const CheckCircleSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Circle cx={5} cy={5} r={5} fill="#31C163" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M7.822 4.27a.6.6 0 0 0 .002-.846.595.595 0 0 0-.843-.002L4.278 6.125 3.27 5.118a.6.6 0 0 0-.846-.002.595.595 0 0 0-.002.843l1.42 1.42c.06.06.128.104.202.133a.595.595 0 0 0 .66-.124L7.823 4.27Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CheckCircleSvg;
