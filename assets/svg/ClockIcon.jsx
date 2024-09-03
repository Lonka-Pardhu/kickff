import Svg, { Path } from "react-native-svg"
const ClockSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10.01}
    height={10.01}
    {...props}
  >
    <Path
      fill="#eca35b"
      d="M5 0a5 5 0 1 0 5 5 5.011 5.011 0 0 0-5-5Zm2.38 7.594a.417.417 0 0 1-.59 0L4.71 5.508a.415.415 0 0 1-.122-.295V2.5a.417.417 0 1 1 .834 0v2.541L7.385 7a.417.417 0 0 1 0 .594Zm0 0"
    />
  </Svg>
)
export default ClockSvg
