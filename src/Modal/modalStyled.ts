import styled from "styled-components"
import { Element } from "../appStyled/commonStyled"

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export const ModalBlock = styled.div`
  width: 600px;
  height: 400px;
  box-sizing: border-box;
  border-radius: ${props => props.theme.border.radius}px;
  border: ${props => props.theme.border.base};
  background: ${props => props.theme.background.main};

  @media (max-width: 650px){
    width: 300px;
  }
`

export const ModalHeader = styled.div`
  box-sizing: border-box;
  width: auto;
  max-width: 100%;
  padding: ${props => props.theme.padding.base}px;
  background: ${props => props.theme.background.block};
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-size: ${props => props.theme.font.common}px;
  color: ${props => props.theme.color.main}px;
  flex: 1 0;
`

export const ModalBody = styled.div`
  max-height: 314px;
  overflow: auto;
  padding: ${props => props.theme.padding.base}px; 
`

export const ItemWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.padding.base}px; 
`

export const Place = styled.span`
  font-size: ${props => props.theme.font.common}px;
  color: ${props => props.theme.color.main};
`

export const Item = styled(Element)`
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  display: block;
  margin-left: ${props => props.theme.padding.base}px;

  span {
    padding-top: ${props => props.theme.padding.base};
    color: ${props => props.theme.color.main};
    font-size: ${props => props.theme.font.small}px;
  }
`

export const ItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: ${props => props.theme.padding.base}px;

  h1 {
    color: ${props => props.theme.color.main};
    font-size: ${props => props.theme.font.common}px;
    padding-right: ${props => props.theme.padding.base}px;
  }
  
  i {
    color: ${props => props.theme.background.main};
    font-size: ${props => props.theme.font.common}px;
  }
`