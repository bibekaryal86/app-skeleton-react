import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import Button from '../forms/Button'

const ModalOverlay = styled.div.attrs({
  className: 'modal-overlay',
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContainer = styled.div.attrs({
  className: 'modal-container',
})`
  width: 500px;
  max-width: 700px;
  background: ghostwhite;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
`
const ModalHeader = styled.div.attrs({
  className: 'modal-header',
})`
  padding: 1rem;
  font-weight: bold;
  background: lightblue;
  display: flex;
  justify-content: space-between;
`
const ModalContent = styled.div.attrs({
  className: 'modal-content',
})`
  overflow: auto;
  padding: 5rem 2rem 5rem 2rem;
  border-bottom: 1px dashed lightgrey;
`
const ModalFooter = styled.div.attrs({
  className: 'modal-footer',
})`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  button {
    margin: 5px;
  }
`
const CloseIcon = styled.div.attrs({
  className: 'modal-close-icon',
})`
  cursor: pointer;
`

interface ModalProps {
  setIsModalOpen: (isModalOpen: boolean) => void
  header?: string
  body: string | JSX.Element
  primaryButton: string
  secondaryButton?: string
  primaryButtonAction: () => void
  secondaryButtonAction?: () => void
}

const Modal = (props: ModalProps): React.ReactPortal | null => {
  const close = () => props.setIsModalOpen(false)

  const closeOnEscapeKeyDown = (event: KeyboardEvent) => {
    if ((event.key || event.code) === 'Escape') {
      close()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  })

  const appModal = document.getElementById('app-modal') as HTMLElement

  return (
    appModal &&
    createPortal(
      <div id="app-modal-id">
        <ModalOverlay onClick={close} />
        <ModalContainer>
          {props.header && (
            <ModalHeader>
              {props.header}
              <CloseIcon onClick={close}>[x]</CloseIcon>
            </ModalHeader>
          )}
          <ModalContent>{props.body}</ModalContent>
          <ModalFooter>
            {props.secondaryButton && props.secondaryButtonAction && (
              <Button
                id={'modal-secondary-button'}
                title={props.secondaryButton}
                color="orange"
                onClick={props.secondaryButtonAction}
              />
            )}
            <Button
              id={'modal-primary-button'}
              title={props.primaryButton}
              color="green"
              onClick={props.primaryButtonAction}
            />
          </ModalFooter>
        </ModalContainer>
      </div>,
      appModal,
    )
  )
}

export default Modal
