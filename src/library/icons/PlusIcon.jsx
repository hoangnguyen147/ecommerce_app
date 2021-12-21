import * as React from "react";
import Svg, { Path } from "react-native-svg"


const PlusIcon = ({disable, ...props}) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 4.167v11.666M4.167 10h11.666"
      stroke={disable ? "#aaa" : "#000"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default PlusIcon;

