import * as React from "react";
import Svg, { Path } from "react-native-svg"


const ClockIcon = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z"
      stroke="#BABABA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 5v5l3.333 1.667"
      stroke="#BABABA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ClockIcon;
