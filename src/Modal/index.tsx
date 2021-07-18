import React from 'react'
import _ from 'lodash'

import { Button } from '../components/UI/uiStyled'
import ModalItem from './ModalItem'

import { useData } from '../context'

import { ModalWrapper, ModalBlock, ModalHeader, Title, ModalBody } from "./modalStyled"

const Modal: React.FC = (): React.ReactElement | null => {
  
  const { config, compareResults, clearCompareResults } = useData()

  const onClick = () => {
    clearCompareResults()
  }

  return compareResults.length ? (
    <ModalWrapper>
      <ModalBlock>
        <ModalHeader>
          <Title>Результаты сравнения</Title>
          <Button title={"Закрыть"} onClick={onClick}>
            <i className="fas fa-times"></i>
          </Button>
        </ModalHeader>
        <ModalBody>
          {
            config ? (
              compareResults.map((starships, index) => (
                <ModalItem
                  place={index + 1}
                  key={starships.length + index}
                  config={config}
                  starships={starships}
                />
              ))
            ) : null
          }
        </ModalBody>
      </ModalBlock>
    </ModalWrapper>
  ) : null
}

export default Modal