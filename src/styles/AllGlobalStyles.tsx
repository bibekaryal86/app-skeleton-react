import React from 'react'
import BaseStyle from './base.style'
import ButtonStyle from './button.style'
import ContainerStyle from './container.style'
import InputStyle from './input.style'
import ListsStyle from './lists.style'

// Made with Skeleton CSS: http://www.getskeleton.com / https://github.com/dhg/Skeleton
// Copyright (c) 2011-2014 Dave Gamache
// License found here: https://github.com/dhg/Skeleton/blob/master/LICENSE.md

const AllGlobalStyles = (): React.ReactElement => (
  <>
    <BaseStyle />
    <ButtonStyle />
    <ContainerStyle />
    <InputStyle />
    <ListsStyle />
  </>
)

export default AllGlobalStyles
