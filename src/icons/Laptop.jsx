import * as React from "react"
const Laptop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={props.width}
    height={props.height}
    fill={props.color}
    style={{
      enableBackground: "new 0 0 64 64",
    }}
    viewBox="0 0 64 64"
    {...props}
  >
    <path d="m62.2 53.7-4-17.3c.2-.3.3-.7.3-1v-23c0-3.4-2.8-6.3-6.3-6.3H11.8c-3.4 0-6.3 2.8-6.3 6.3v23c0 .3.1.7.2.9l-4 17.5c-.2 1 .1 2 .8 2.8.7.8 1.7 1.3 2.8 1.3h53.4c1.1 0 2.2-.5 2.8-1.4.7-.8.9-1.9.7-2.8zM10.1 12.4c0-1 .8-1.8 1.8-1.8h40.3c1 0 1.8.8 1.8 1.8v20.8H10.1V12.4zm-3.6 41 3.6-15.7h43.7l3.6 15.7H6.5z" />
  </svg>
)
export default Laptop

