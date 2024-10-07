import * as React from "react";
import Svg, { Path } from "react-native-svg";
const WrongSvg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} {...props}>
    <Path
      fill="#f25c54"
      d="M4.46 0a4.46 4.46 0 1 0 4.46 4.46A4.465 4.465 0 0 0 4.46 0Zm0 0"
      data-name="Path 37008"
    />
    <Path
      fill="#fafafa"
      d="M6.252 5.677a.406.406 0 1 1-.574.574L4.459 5.032 3.24 6.251a.406.406 0 1 1-.574-.574l1.219-1.219-1.219-1.219a.406.406 0 0 1 .574-.574l1.219 1.219 1.219-1.219a.406.406 0 1 1 .574.574L5.033 4.458Zm0 0"
      data-name="Path 37009"
    />
  </Svg>
);
export default WrongSvg;
