import * as React from "react"
const Pencil = (props) => (
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
    <path d="M61.2 13c-3.2-3.4-6.6-6.8-10-10.1-.7-.7-1.5-1.1-2.4-1.1-.9 0-1.8.3-2.4 1L8.7 40.2c-.6.6-1 1.3-1.3 2L1.9 59c-.3.8-.1 1.6.3 2.2.5.6 1.2 1 2.1 1h.4l17.1-5.7c.8-.3 1.5-.7 2-1.3l37.5-37.4c.6-.6 1-1.5 1-2.4s-.4-1.7-1.1-2.4zM20.6 52.1c-.1.1-.2.1-.3.2L7.4 56.6l4.3-12.9c0-.1.1-.2.2-.3L39.4 16l8.7 8.7-27.5 27.4zm30.6-30.6-8.7-8.7 6.1-6.1c2.9 2.8 5.8 5.8 8.6 8.7l-6 6.1z" />
  </svg>
)
export default Pencil
