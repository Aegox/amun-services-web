import * as React from "react"
const Lines = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill={props.color}
      d="M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM2 9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM2.5 14a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"
    />
  </svg>
)
export default Lines

