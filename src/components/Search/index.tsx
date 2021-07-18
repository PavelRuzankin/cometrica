import _ from "lodash"
import React from "react"

import { useData } from "../../context"

import Dropdown from "../UI/Dropdown"

import { DropdownItem } from "../UI/DropdownList"

import { SearchWrapper, Label, SearchBlock } from "./searchStyled"

const Search: React.FC = (): React.ReactElement => {

  const { 
    availableStarships, 
    starships, 
    setSearch, 
    addStarship, 
    removeStarship,
    loading
  } = useData()

  const prepareItems = (): DropdownItem[] => {
    return _.map(availableStarships, starship => ({
      id: starship.id,
      text: starship.name
    }))
  }

  const prepareValue = () => {
    return _.map(starships, starship => starship.id)
  }

  const onChangeText = (value: string) => {
    setSearch(value)
  }

  const onSelect = (id: string) => {
    
    const starshipExist = !!starships[id]

    if(!starshipExist){

      const starship = availableStarships[id]
      starship && addStarship(starship)

    }else {
      removeStarship(id)
    }
  }

  const onVisibleChange = (visible: boolean) => {
    !visible && setSearch("")
  }

  return (
    <SearchWrapper>
      <SearchBlock>
        <Label htmlFor={"search"} >Искать корабль</Label>
        <Dropdown 
          placeholder={"Искать корабль"}
          id={"search"}
          multiselect={true}
          loading={loading}
          value={prepareValue()}
          items={prepareItems()}
          onSelect={onSelect}
          onChangeText={onChangeText}
          onVisibleChange={onVisibleChange}
        />
      </SearchBlock>
    </SearchWrapper>
  )
}

export default Search