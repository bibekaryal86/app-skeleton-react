import React from 'react'
import styled, { css } from 'styled-components'

const ButtonWrapper = styled.button.attrs({
  className: 'button-wrapper',
})<ButtonWrapperProps>`
  ${(props) =>
    props.color
      ? css`
          background: ${props.color};
          color: whitesmoke;
          border: none;
          &[disabled] {
            color: whitesmoke;
            border: none;
          }
        `
      : css``}
  ${(props) =>
    props.includeBorder
      ? css`
          border: 1px solid;
        `
      : css`
          border: none;
          &[disabled] {
            border: none;
          }
        `}

  ${(props) =>
    props.noPaddingNoMargin
      ? css`
          padding: 0px;
          margin: 0px;
        `
      : css``}
`

interface ButtonWrapperProps {
  color?: string
  includeBorder?: boolean
  noPaddingNoMargin?: boolean
}

interface ButtonProps {
  id: string
  title: string
  includeBorder?: boolean
  disabled?: boolean
  color?: string
  border?: string
  onClick?: () => void
  noPaddingNoMargin?: boolean
}

const Button: React.FC<ButtonProps> = (props) => (
  <>
    <ButtonWrapper
      type="button"
      id={props.id}
      name={props.id}
      disabled={props.disabled}
      onClick={props.onClick}
      color={props.color}
      includeBorder={props.includeBorder}
      noPaddingNoMargin={props.noPaddingNoMargin}
    >
      {props.title}
    </ButtonWrapper>
  </>
)

export default Button
