import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NavigationIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m3 11 19-9-9 19-2-8-8-2Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default NavigationIcon
