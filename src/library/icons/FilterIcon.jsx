import * as React from "react";
import Svg, { Path } from "react-native-svg"


const FilterIcon = (props) => (
  <Svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.333 18v-5.833M3.333 8.833V3M10 18v-7.5M10 7.167V3M16.667 18v-4.167M16.667 10.5V3M.833 12.167h5M7.5 7.167h5M14.167 13.833h5"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default FilterIcon;
