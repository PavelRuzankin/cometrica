import React from "react"

import StarshipList from "../StarshipList";
import Search from "../Search";

import { Container } from "../../appStyled/commonStyled"
import { Wrapper } from "./bodyStyled"

const Body: React.FC = (props): React.ReactElement => {

  return (
    <Wrapper>
      <Container>
        <StarshipList/>
        <Search/>
      </Container>
    </Wrapper>
  )
}

export default Body