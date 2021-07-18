import React from "react"
import Loading from "./Loading"

import * as UI from "./uiStyled"

export type DropdownItem = {
  id: string
  text: string
}

export type Value = string[]

export interface DropdownListProps {
  value: Value,
  items: DropdownItem[]
  loading?: boolean
  onSelect?: (id: string) => void
}

const DropdownList: React.FC<DropdownListProps> = (props): React.ReactElement => {

  const isSelected = (id: string) => props.value.includes(id)
  const onSelect = (event: React.MouseEvent, id: string) => {

    event.preventDefault()
    event.stopPropagation()
    props.onSelect && props.onSelect(id)
  }

  if(props.loading){
    return (
      <UI.DropdownEmpty>
        <Loading />
      </UI.DropdownEmpty>
    )
  }

  if(props.items.length){

    return (
      <UI.DropdownList>
        {props.items.map(item => {
          const selected = isSelected(item.id)
          return (
            <UI.DropdownItem
              onClick={event => onSelect(event, item.id)}
              onMouseDown={event => event.preventDefault()}
              title={item.text}
              selected={selected}
              key={item.id}
            >
              <span> {item.text} </span> 
              {selected && <i className="fas fa-check"></i>}
            </UI.DropdownItem>
          )
        })}
        
      </UI.DropdownList>
    )
  }

  return (
    <UI.DropdownEmpty>
        <i className="fas fa-box-open"></i>
        <span> Пусто </span>
    </UI.DropdownEmpty>
  )

}

export default DropdownList