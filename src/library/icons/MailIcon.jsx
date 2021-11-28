import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MailIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667z"
        stroke="#BABABA"
        strokeWidth={1.565}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.333 5L10 10.833 1.667 5"
        stroke="#BABABA"
        strokeWidth={1.565}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MailIcon;
