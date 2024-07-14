import * as React from "react"
const Briefcase = (props) => (
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
    <path d="M56 20H43.7v-1.8c0-5.7-4.6-10.3-10.3-10.3h-2.9c-5.7 0-10.3 4.6-10.3 10.3V20H8c-3.4 0-6.3 2.8-6.3 6.3v23.6c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V26.2c0-3.4-2.9-6.2-6.3-6.2zm-31.2-1.8c0-3.2 2.6-5.8 5.8-5.8h2.9c3.2 0 5.8 2.6 5.8 5.8V20H24.8v-1.8zM8 24.5h48c1 0 1.8.8 1.8 1.8v5.6h-5.9V30c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1.9H16.7V30c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1.9H6.3v-5.6c0-1 .7-1.8 1.7-1.8zm48 27.1H8c-1 0-1.8-.8-1.8-1.8V36.3h5.9v1.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-1.9h30.6v1.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-1.9h5.9v13.5c0 1-.8 1.8-1.8 1.8z" />
  </svg>
)
export default Briefcase

