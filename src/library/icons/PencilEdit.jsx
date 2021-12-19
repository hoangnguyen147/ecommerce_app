import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const PencilEdit = (props) => (
  <Svg
    width={30}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      filter="url(#a)"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M14 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <Path d="M21.5 2.5a2.121 2.121 0 1 1 3 3L15 15l-4 1 1-4 9.5-9.5Z" />
    </G>
    <Defs></Defs>
  </Svg>
)

export default PencilEdit
