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
  color?: string
  children: string | JSX.Element | JSX.Element[]
  // for skeleton CSS container/row/column if used
  container?: boolean
  classname?: string
}

const DisplayCardWrapper = styled.div.attrs({
  className: 'display-card-wrapper',
})<DisplayCardProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: ${(props) => (props.alignContent ? props.alignContent : 'flex-start')};
  margin: 5px;
  padding: 5px;
  color: ${(props) => (props.color ? props.color : 'automatic')};
`

const DisplayCardBody = styled.div.attrs({
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

const DisplayCardRow = styled.div.attrs({
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
    <DisplayCardBody {...props}>
      {props.container ? <div className="container">{props.children}</div> : <>{props.children}</>}
    </DisplayCardBody>
  </DisplayCardWrapper>
)

export const DisplayCardWrapperRow = (props: DisplayCardProps) => (
  <DisplayCardRow {...props}>
    {props.container ? <div className="row">{props.children}</div> : <>{props.children}</>}
  </DisplayCardRow>
)

export const DisplayCardWrapperColumn = (props: DisplayCardProps) => (
  <>{props.classname ? <div className={props.classname}>{props.children}</div> : <>{props.children}</>}</>
)
