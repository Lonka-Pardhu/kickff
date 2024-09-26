import Svg, { G, Path } from "react-native-svg";
const StarSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={9}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C47BB"
      stroke="#F25C54"
      strokeWidth={0.2}
      d="m4.88.494.647 1.992a.6.6 0 0 0 .571.414h2.094a.4.4 0 0 1 .235.724l-1.694 1.23a.6.6 0 0 0-.218.672l.647 1.991a.4.4 0 0 1-.615.447l-1.694-1.23a.6.6 0 0 0-.706 0l-1.694 1.23a.4.4 0 0 1-.615-.447l.647-1.991a.6.6 0 0 0-.218-.671L.573 3.624A.4.4 0 0 1 .808 2.9h2.094a.6.6 0 0 0 .57-.414L4.12.494a.4.4 0 0 1 .76 0Z"
    />
  </Svg>
);
export default StarSvg;
