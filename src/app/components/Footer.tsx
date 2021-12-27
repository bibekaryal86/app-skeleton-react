import React from 'react'
import styled from 'styled-components'

export const StyledFooter = styled.footer.attrs({
  className: 'styled-footer',
})`
  margin: 100px;
  font-size: smaller;
  color: grey;
  text-align: center;
  bottom: 0;
`

const BUILD_NUMBER = process.env.BUILD_NUMBER
const CURRENT_YEAR = new Date().getFullYear()

const Footer = (): React.ReactElement => {
  return (
    <StyledFooter>
      Copyright (c). {CURRENT_YEAR}. All rights reserved. <br /> build {BUILD_NUMBER}
    </StyledFooter>
  )
}

export default Footer
