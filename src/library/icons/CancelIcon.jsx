import * as React from "react";
import Svg, { Path } from "react-native-svg"


const CancelIcon = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15 5 5 15M5 5l10 10"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CancelIcon;
