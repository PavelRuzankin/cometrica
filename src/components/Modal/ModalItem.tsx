import _ from "lodash"
import React from "react"
import { Option, Starship } from "../../context/types"
import { ItemWrapper, Place, Item, ItemHeader } from "./modalStyled"

interface ModalItemProps {
  config: Option
  place: number,
  starships: Starship[]
} 

const ModalItem: React.FC<ModalItemProps> = (props): React.ReactElement => {

  const prepareNames = () => {
    return props.starships.map(starship => starship.name).join(", ")
  }

  const prepareStars = () => {

    let starCount = 0
    switch(props.place){
      case 1:
        starCount = 3
        break
      case 2:
        starCount = 2
        break
      case 3:
        starCount = 1
        break
    }

    const stars = []
    for (let i = 0; i < starCount; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>)
    }
    return stars
  }

  const getCount = () => {
    return props.starships[0][props.config.id]
  }
  
  return (
    <ItemWrapper>
      <Place>{props.place}</Place>
      <Item>  
        <ItemHeader>
          <h1>{prepareNames()}</h1>
          {prepareStars()}
        </ItemHeader>
        <span> 
          <strong>{props.config.text}: </strong>
          {getCount()} 
        </span>

      </Item>
    </ItemWrapper>
  )
}

export default ModalItem