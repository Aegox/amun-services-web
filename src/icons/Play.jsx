import * as React from "react"
const Play = (props) => (
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
    <path d="M9.7 62.3c-.7 0-1.5-.2-2.1-.6-1.4-.8-2.2-2.1-2.2-3.7V6c0-1.5.8-2.9 2.2-3.7 1.4-.8 3-.7 4.4.1l44.8 26.1c1.3.8 2 2.1 2 3.6 0 1.4-.7 2.8-2 3.5l-44.9 26c-.7.4-1.5.7-2.2.7zm-.1-4.5zm.2-51.4v51.2l44-25.6-44-25.6z" />
  </svg>
)
export default Play

