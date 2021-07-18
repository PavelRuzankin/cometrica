import React, { useRef, useState } from "react"
import _ from "lodash"

import Text from "./Text"

import DropdownList, { DropdownListProps, Value } from "./DropdownList" 

import * as UI from "./uiStyled"

interface DropdownProps extends DropdownListProps {
  id?: string
  multiselect?: boolean
  placeholder?: string
  button?: React.ReactElement | null
  onChange?: (value: Value) => void
  onVisibleChange?: (visible: boolean) => void 
  onChangeText?: (value: string) => void
} 

const Dropdown: React.FC<DropdownProps> = (props): React.ReactElement => {

  const [ open, setOpen ] = useState(false)
  const [ value, setValue] = useState('')
  const textRef = useRef<HTMLInputElement>(null)

  const prepareNewValue = (id: string): Value => {

    if(props.multiselect){

      const value = [...props.value]
      const itemIndex = value.findIndex(valueId => valueId === id)
      itemIndex > -1 ? value.splice(itemIndex, 1) : value.push(id)
      
      return value

    } else {
      return [ id ]
    }
  }

  const showValue = (): string | undefined => {

    const selectedItemsText: string[] = [] 
    
    props.value.forEach(valueId => {
      const item = props.items.find(item => item.id === valueId)
      
      if(item){
        selectedItemsText.push(item.text)
      }
    })


    return selectedItemsText.join(", ")
  }

  const onSelect = (id: string) => {

    props.onSelect && props.onSelect(id)
    props.onChange && props.onChange(prepareNewValue(id))
    !props.multiselect && textRef.current?.blur()

  }

  const onVisibleChange = (visible: boolean) => {

    setOpen(visible)

    if(!visible){
      setValue("")
    }

    props.onVisibleChange && props.onVisibleChange(visible)

  }

  const onChangeTextValue = (value: string) => {
    setValue(value)
    props.onChangeText && props.onChangeText(value)
  }


  return (
    <UI.Dropdown>
      <UI.DropdownWrapper>
        <Text
          id={props.id}
          onChange={onChangeTextValue}
          value={value}
          placeholder={showValue() || props.placeholder}
          onFocusChange={onVisibleChange}
          ref={textRef}
          button={props.button ? props.button : null}
        />
        {
          open ? (
            <DropdownList
              items={props.items}
              loading={props.loading}
              value={props.value}
              onSelect={onSelect}
            />
          ) : null
        }
      </UI.DropdownWrapper>
    </UI.Dropdown>
    
  )
}

export default Dropdown