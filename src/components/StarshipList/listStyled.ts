import styled from "styled-components";
import { Element } from "../../appStyled/commonStyled";

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: ${props => -props.theme.padding.big}px;
`

export const StarshipWrapper = styled.div`
  display: block;
  width: 100%;
  float: left;

  @media only screen and (min-width: 768px) {
		width: 50%;
  }

  @media only screen and (min-width: 1100px) {
    width: 33.333%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }

`

export const StarshipItem = styled(Element)`
  margin-top: ${props => props.theme.padding.base}px;
  margin-right: ${props => props.theme.padding.base}px;
  margin-left: ${props => props.theme.padding.base}px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h1 {
    color: ${props => props.theme.color.main};
    font-size: ${props => props.theme.font.common}px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    padding-bottom: ${props => props.theme.padding.base}px;
  }

  span {
    padding-right: 10px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    color: ${props => props.theme.color.main};
    font-size: ${props => props.theme.font.small}px;
  }

`