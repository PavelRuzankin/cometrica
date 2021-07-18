import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
`

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
` 

export const Element = styled.div`
  display: flex;
  background-color: ${props => props.theme.background.block};
  border: ${props => props.theme.border.base};
  border-radius: 50px;
  padding-top: ${props => props.theme.padding.base}px;
  padding-bottom: ${props => props.theme.padding.base}px;

  padding-left: ${props => props.theme.padding.big * 2}px;
  padding-right: ${props => props.theme.padding.big * 2}px;
`