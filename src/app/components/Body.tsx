import React from 'react'
import styled from 'styled-components'
import AppRoutes from './AppRoutes'

const BodyWrapper = styled.div.attrs({
  className: 'body-wrapper',
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`

export const BodyContent = styled.div.attrs({
  className: 'body-content',
})`
  width: 100%;
  display: inline-block;
`

const Body = (): React.ReactElement => {
  return (
    <BodyWrapper>
      <BodyContent>
        <AppRoutes />
      </BodyContent>
    </BodyWrapper>
  )
}

export default Body
