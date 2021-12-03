import * as React from "react"

const TrashIcon = (props) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 6.5h18M8.5 6.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-14h14ZM10.5 11.5v6M14.5 11.5v6"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default TrashIcon;
