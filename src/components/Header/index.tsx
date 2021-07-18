import React, { useState, useEffect, useCallback } from "react"
import _ from "lodash"

import { useData } from "../../context/index"

import Dropdown from "../UI/Dropdown"
import Button from "../UI/Button"

import { HeaderBlock, Title, Wrapper, Dashboard, ButtonWrapper } from "./headerStyled"

const Header: React.FC = (): React.ReactElement => {

  const { options, config, starships, compare, setConfig } = useData()
  const [ items, setItems ] = useState(options)

  const onChange = (value: string[]) => value.length
    ? setConfig(value[0])
    : onClearConfig()

  const onClearConfig = () => setConfig(null)

  const onChangeText = useCallback(_.debounce((values: string) => {
    const items = options.filter(option => option.text.includes(values))
    setItems(items)
  }, 300), [options.length])

  useEffect(() => {
    setItems(items)
  }, [])

  const value = config ? [config.id] : []
  return (
    <HeaderBlock>
      <Wrapper>
        <Title> Star Wars Starships </Title>
        <Dashboard>
          <Dropdown
            items={items}
            value={value}
            placeholder={"Что сравнивать?"}
            onChange={onChange}
            onChangeText={onChangeText}
            button={ !!config ? (
                <Button title={"Очистить"} onClick={onClearConfig}>
                  <i className="fas fa-times"></i>
                </Button>
              ) : null
            }
          /> 
          {
            !!config && !_.isEmpty(starships) ? (
              <ButtonWrapper>
                <Button title={"Сравнить"} onClick={compare}>
                <i className="fas fa-less-than-equal"></i>
                </Button>
              </ButtonWrapper>
            ) : null
          }
        </Dashboard>
      </Wrapper>
    </HeaderBlock>
  )
}

export default Header