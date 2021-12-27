import styled from 'styled-components'

interface DisplayCardProps {
  id?: string
  borderBtm?: boolean
  borderTop?: boolean
  width?: string
  textAlign?: string
  alignContent?: string
  background?: string
  fontWeight?: string
  children: string | JSX.Element | JSX.Element[]
}

export const DisplayCardWrapper = styled.div.attrs({
  className: 'display-card-wrapper',
})<DisplayCardProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: ${(props) => (props.alignContent ? props.alignContent : 'flex-start')};
  margin: 5px;
  padding: 5px;
`

export const DisplayCardBody = styled.div.attrs({
  className: 'display-card-body',
})<DisplayCardProps>`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 5px;
  display: inline-block;
  width: ${(props) => (props.width ? props.width : '-webkit-fill-available')};
  min-width: fit-content;
  background: ${(props) => (props.background ? props.background : 'ghostwhite')};
`

export const DisplayCardRow = styled.div.attrs({
  className: 'display-card-row',
})<DisplayCardProps>`
  padding: 5px;
  border-bottom: ${(props) => (props.borderBtm ? '1px solid lightgrey' : '')};
  border-top: ${(props) => (props.borderTop ? '1px solid lightgrey' : '')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
`

export const DisplayCardWrapperBody = (props: DisplayCardProps) => (
  <DisplayCardWrapper {...props}>
    <DisplayCardBody {...props}>{props.children}</DisplayCardBody>
  </DisplayCardWrapper>
)
