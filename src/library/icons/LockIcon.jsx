import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LockIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.833 9.167H4.167c-.92 0-1.667.746-1.667 1.666v5.834c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666v-5.834c0-.92-.746-1.666-1.667-1.666zM5.833 9.167V5.833a4.167 4.167 0 018.334 0v3.334"
        stroke="#BABABA"
        strokeWidth={1.565}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LockIcon;
