import styled from "styled-components"
import { Container } from "../../appStyled/commonStyled";

export const HeaderBlock = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: ${props => props.theme.background.block};
  display: flex;
  align-items: center;
`

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 670px) {
    flex-wrap: wrap;
  }
`

export const Dashboard = styled.div`
  width: 450px;
  display: flex;
  align-items: center;

  @media (max-width: 670px) {
    margin-top: ${props => props.theme.padding.base}px;
  }

`

export const Title = styled.h1`
  font-size: ${props => props.theme.font.header}px;
  color: ${props => props.theme.color.main};
  flex: 1 0;
  white-space: nowrap;
  margin-right: ${props => props.theme.padding.base}px;

  @media (max-width: 860px) {
    font-size: ${props => props.theme.size.sub}px;
  }
`

export const ButtonWrapper = styled.div`
  margin-left: ${props => props.theme.padding.base}px;
`

