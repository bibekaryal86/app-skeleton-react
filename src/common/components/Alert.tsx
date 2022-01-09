import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { AlertState, resetAlert } from '../utils/alerts'
import { GlobalState } from '../../app/store/redux'

const AlertWrapper = styled.div.attrs({
  className: 'alert-wrapper',
})<{
  type: string | undefined
}>`
  padding: 15px 35px 15px 15px;
  margin: 15px 5px 15px 5px;
  border-radius: 7px;
  display: flex;
  display: flex;
  justify-content: space-between;

  ${({ type }) =>
    type === 'success'
      ? css`
          ${successCss()}
        `
      : type === 'info'
      ? css`
          ${infoCss()}
        `
      : type === 'warn'
      ? css`
          ${warnCss()}
        `
      : type === 'failure'
      ? css`
          ${failureCss()}
        `
      : css``}
`

const successCss = () => 'color: #3c763d; ' + 'background-color: #dff0d8; ' + 'border-color: #d6e9c6; '

const infoCss = () => 'color: #31708f; ' + 'background-color: #d9edf7; ' + 'border-color: #bce8f1; '

const warnCss = () => 'color: #8a6d3b; ' + 'background-color: #fcf8e3; ' + 'border-color: #faebcc; '

const failureCss = () => 'color: #a94442; ' + 'background-color: #f2dede; ' + 'border-color: #ebccd1; '

const CloseIcon = styled.div.attrs({
  className: 'alert-close-icon',
})`
  cursor: pointer;
  font-weight: bold;
`

interface AlertProps extends AlertState {
  resetAlert: () => void
}

const Alert = (props: AlertProps): React.ReactElement | null => {
  const { messageType, messageText, resetAlert } = props

  const [isShowAlert, setIsShowAlert] = useState(false)
  const close = () => {
    setIsShowAlert(false)
    resetAlert()
  }

  useEffect(() => {
    if (messageType && messageText) {
      setIsShowAlert(true)
    } else {
      setIsShowAlert(false)
    }
  }, [messageType, messageText])

  return isShowAlert ? (
    <AlertWrapper type={messageType}>
      <div>{messageText}</div>
      <CloseIcon onClick={close}>[x]</CloseIcon>
    </AlertWrapper>
  ) : null
}

const mapStateToProps = ({ alert }: GlobalState) => {
  return {
    messageType: alert.messageType,
    messageText: alert.messageText,
  }
}

const mapDispatchToProps = {
  resetAlert: () => resetAlert(),
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
