import _ from "lodash"
import React from "react"

import { useData } from "../../context"

import Starship from "./Starship"

import { ListContainer, StarshipWrapper } from "./listStyled"

const StarshipList: React.FC = (): React.ReactElement => {

  const { starships, removeStarship } = useData()

  const onDelete = (id: string) => {
    removeStarship(id)
  }

  return (
    <ListContainer>
      {
        _.map(starships, starship => (
          <StarshipWrapper>
            <Starship
              name={starship.name}
              model={starship.model}
              manufacturer={starship.manufacturer}
              id={starship.id}
              key={starship.id}
              onDelete={onDelete}
            />
          </StarshipWrapper>
        ))
      }
    </ListContainer>
  )
}

export default StarshipList