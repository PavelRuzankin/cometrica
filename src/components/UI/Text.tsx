import React from "react"

import * as UI from "./uiStyled"

interface TextProps {
  id?: string
  value?: string
  placeholder?: string
  button?: React.ReactElement | null
  onChange?: (value: string) => void,
  onFocusChange?: (focus: boolean) => void
}

const Text: React.ForwardRefRenderFunction<HTMLInputElement, TextProps> = (props, ref): React.ReactElement => {
  
  const onBlur = () => props.onFocusChange && props.onFocusChange(false)
  const onFocus = () => props.onFocusChange && props.onFocusChange(true)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => (
    props.onChange && props.onChange(event.target.value)
  )

  return (
    <UI.Text>
      <input
        id={props.id}
        ref={ref}
        value={props.value} 
        type="text" 
        placeholder={props.placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      {props.button}
    </UI.Text>
  )
}

export default React.forwardRef(Text)