import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CartIcon(props) {
  return (
    <Svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#prefix__clip0_848_424)"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M9 22.5a1 1 0 100-2 1 1 0 000 2zM20 22.5a1 1 0 100-2 1 1 0 000 2zM1 1.5h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6.5H6" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_848_424">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CartIcon
