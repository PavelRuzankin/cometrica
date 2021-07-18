import React from "react"

import * as UI from "./uiStyled"

interface ButtonProps {
  title?: string
  children: React.ReactElement | string | number
  onClick: (event: React.MouseEvent) => void
}

const Button: React.FC<ButtonProps> = (props): React.ReactElement => {
  
  return (
    <UI.Button 
      title={props.title}
      onClick={props.onClick}
      onMouseDown={event => event.preventDefault()} 
    >
      {props.children}
    </UI.Button>
  )
}

export default Button