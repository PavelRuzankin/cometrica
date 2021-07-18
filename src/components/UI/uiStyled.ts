import styled, { keyframes } from "styled-components"

interface DropDownItemProps {
  selected?: boolean
}

export const Button = styled.button`
  width: ${props => props.theme.size.base}px;
  min-width: ${props => props.theme.size.base}px;
  height: ${props => props.theme.size.base}px;
  border: none;
  background: ${props => props.theme.background.element};
  border-radius: ${props => props.theme.border.radius}px;
  cursor: pointer;
  color: ${props => props.theme.background.main};
`

/* Text */

export const Text = styled.div`
  width: 100%;
  height: ${props => props.theme.size.base}px;
  background: ${props => props.theme.background.block};
  position: relative;
  display: inline-block;

  > input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    border: ${props => props.theme.border.base};
    border-radius: 5px;
    outline: none;
    background: ${props => props.theme.background.main};
    color: ${props => props.theme.color.main};
    box-sizing: border-box;
    font-size: ${props => props.theme.font.common}px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > button {
    position: absolute; 
    top: 0;
    right: 0px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`
/* Dropdown */

export const Dropdown = styled.div`
  width: 100%;
  height: ${props => props.theme.size.base}px;
`

export const DropdownWrapper = styled.div`
  position: relative;
  height: ${props => props.theme.size.sub}px;
  width: 100%;
`

export const DropdownEmpty = styled.div`
  position: absolute;
  z-index: 10;
  top: ${({theme}) => theme.size.base + (theme.padding.base / 2)}px;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.background.main};
  border: ${props => props.theme.border.base};
  border-radius: ${props => props.theme.border.radius}px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: ${props => props.theme.padding.base}px; 
    font-size: ${props => props.theme.font.common}px;
    color: ${props => props.theme.color.main};
  }

  i {
    font-size: ${props => props.theme.font.header}px;
    color: ${props => props.theme.background.element};
  }

` 

export const DropdownList = styled.ul` 
  position: absolute;
  z-index: 10;
  top: ${({theme}) => theme.size.base + (theme.padding.base / 2)}px;
  width: 100%;
  max-height: 300px;
  overflow-x: auto;
  background-color: ${props => props.theme.background.main};
  border: ${props => props.theme.border.base};
  border-radius: ${props => props.theme.border.radius}px;
  box-sizing: border-box;
`

export const DropdownItem = styled.li<DropDownItemProps>` 
  transition: 0.2s;
  cursor: pointer;
  height: ${props => props.theme.size.sub}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  font-size: ${props => props.theme.font.common}px;
  background-color: ${props => props.selected && props.theme.background.sub};
  max-height: 300px;
  overflow: auto;

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: ${props => props.selected && "bold"};
    flex: 1 0;
  }

  i {
    color: ${props => props.theme.color.main};
    margin-right: ${props => props.theme.padding.base / 2 }px;
  }

  &:hover {
    background-color: ${props => props.theme.background.sub};
  }
`

const loadingAnimation1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const loadingAnimation2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

const loadingAnimation3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${props => props.theme.background.block};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: ${loadingAnimation1} 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: ${loadingAnimation2} 0.6s infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation: ${loadingAnimation2} 0.6s infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation: ${loadingAnimation3} 0.6s infinite;
    }

  }

`
