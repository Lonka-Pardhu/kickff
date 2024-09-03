import Svg, { Path } from "react-native-svg";
const HockeySvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 485 485",
    }}
    viewBox="0 0 485 485"
    {...props}
  >
    <Path d="M225.733 259.018 98.419 4.148 71.581 17.555l137.385 275.029zM450 390.852H291.587l-15.552-31.134-16.767 33.566 30.66 61.378c7.457 14.931 25.666 26.19 42.356 26.19H450c19.299 0 35-15.701 35-35v-20c0-19.3-15.701-35-35-35z" />
    <Path d="M386.581 4.148 193.413 390.852H35c-19.299 0-35 15.701-35 35v20c0 19.299 15.701 35 35 35h117.716c16.69 0 34.899-11.259 42.356-26.189L413.419 17.555 386.581 4.148z" />
  </Svg>
);
export default HockeySvg;
