import React, { useCallback } from 'react'
import { css, styled } from 'styled-components'

interface HrefLinkProps {
  id: string
  linkTo: string
  title: string
  disabled?: boolean
  underline?: boolean
  color?: string
  margin?: string

  onClick?(event: React.MouseEvent): void
}

interface HrefLinkWrapperProps {
  underline?: boolean
  color?: string
  disabled?: boolean
  margin?: string
}

const HrefLinkWrapper = styled.a.attrs({
  className: 'hreflink-wrapper',
})<HrefLinkWrapperProps>`
  text-decoration: ${(props) => (props.underline ? 'underline' : '')};
  color: ${(props) => (props.color ? props.color : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};

  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
          cursor: default;
          color: Gray;
        `
      : ``}
`

const HrefLink: React.FC<HrefLinkProps> = (props) => {
  const onClick = useCallback(
    (event: React.MouseEvent) => {
      props.onClick && props.onClick(event)
    },
    [props],
  )

  return (
    <>
      <HrefLinkWrapper
        id={props.id}
        href={props.linkTo}
        onClick={onClick}
        color={props.color}
        underline={props.underline}
        disabled={props.disabled}
        margin={props.margin}
      >
        {props.title}
      </HrefLinkWrapper>
    </>
  )
}

export default HrefLink
