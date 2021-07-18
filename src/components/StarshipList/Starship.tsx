import React from "react"
import { Button } from "../UI/uiStyled"
import { StarshipItem, Description } from "./listStyled"

export interface StarshipProps {
  name: string
  model: string
  manufacturer: string
  id: string
  onDelete: (id: string) => void
}

const Starship: React.FC<StarshipProps> = (props): React.ReactElement => (
  <StarshipItem>
    <Description>
      <h1>{props.name}</h1>
      <span> <strong>Модель: </strong> {props.model} </span>
      <span> <strong>Производитель: </strong> {props.manufacturer} </span>
    </Description>
    <Button onClick={() => props.onDelete(props.id)}> 
      <i className="far fa-trash-alt"></i>
    </Button>
  </StarshipItem>
)

export default Starship