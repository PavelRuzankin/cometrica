import styled from "styled-components"
import { Element } from "../../appStyled/commonStyled"

export const SearchWrapper = styled.div`
  width: 100%;

  @media (min-width: 1200px) {
    width: 40%;
  }

  @media only screen and (max-width: 500px) {
		label {
      display: none
    }
  }
`

export const SearchBlock = styled(Element)`
  margin-top: ${props => props.theme.padding.base}px;
  margin-left: ${props => props.theme.padding.base}px;
  margin-right: ${props => props.theme.padding.base}px;
  align-items: center;
`

export const Label = styled.label`
  font-size: ${props => props.theme.font.common}px;
  color: ${props => props.theme.color.main};
  padding-right: ${props => props.theme.padding.base}px;
  white-space: nowrap;
`