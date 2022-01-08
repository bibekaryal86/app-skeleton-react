import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { UserDetails } from '../types/login.data.types'
import { AuthContext } from '../context/AuthContext'
import { protectedRoutes } from './AppRoutes'

const StyledHeader = styled.header.attrs({
  className: 'styled-header',
})`
  position: relative;
  z-index: 1;
  top: 0;
`

const StyledNav = styled.nav.attrs({
  className: 'styled-nav',
})<StyledNavProps>`
  display: flex;
  align-items: center;
  padding: 5px;
  color: whitesmoke;

  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  background: ${(props) => (props.background ? props.background : 'mediumseagreen')};
  justify-content: ${(props) => (props.justifycontent ? props.justifycontent : 'center')};

  @media (max-width: 786px) {
    flex-direction: column;
  }
`

const StyledNavLink = styled(NavLink)<StyledNavProps>`
  margin: ${(props) => (props.margin ? props.margin : '5px 5px 5px 5px')};
  padding: ${(props) => (props.padding ? props.padding : '5px 5px 5px 5px')};
  color: whitesmoke;
  font-weight: normal;
  &.active {
    font-weight: bold;
  }
  &:hover {
    transform: scale(1.05);
  }
`

const StyledNavLinkDropdown = styled(StyledNavLink)`
  margin: 0px;
  background: mediumseagreen;
  display: block;
  text-align: left;
  &:hover {
    background-color: darkseagreen;
  }
`

const StyledNavDropdownMenuContent = styled.div.attrs({
  className: 'styled-nav-dropdown-menu-content',
})`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`

const StyledNavDropdownMenu = styled.div.attrs({
  className: 'styled-nav-dropdown-menu',
})`
  display: inline-block;
  &:hover ${StyledNavDropdownMenuContent} {
    display: block;
  }
`

const StyledNavLinkButton = styled(StyledNavLink)<StyledNavProps>`
  padding: 2px 5px 2px 5px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid whitesmoke;
`

// use all lowercase because of console error
// use string instead of boolean because of console error
interface StyledNavProps {
  margin?: string
  padding?: string
  justifycontent?: string
  background?: string
  fontWeight?: string
}

const getDisplayName = (userDetails: UserDetails): string =>
  userDetails ? userDetails.firstName + ' ' + userDetails.lastName : ''

const Header = (): React.ReactElement => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const authContext = useContext(AuthContext)

  useEffect(() => {
    const userDetails = authContext.auth?.userDetails
    setDisplayName(getDisplayName(userDetails))
    setLoggedIn(authContext.auth?.isLoggedIn)
  }, [authContext.auth])

  return (
    <StyledHeader>
      <HeaderLinks displayName={displayName} />
      <Navigation isLoggedIn={isLoggedIn} />
    </StyledHeader>
  )
}

const HeaderLinks = ({ displayName = '' }): React.ReactElement => {
  return (
    <StyledNav justifycontent={displayName.trim() ? 'space-between' : ''} background="seagreen" fontWeight="bold">
      React SPA Skeleton
      {displayName.trim() ? (
        <>
          <div>
            {displayName} |
            <StyledNavLinkButton to="/logout" margin="0px 5px 0px 5px">
              Sign Out
            </StyledNavLinkButton>
          </div>
        </>
      ) : (
        <></>
      )}
    </StyledNav>
  )
}

const Navigation = ({ isLoggedIn = false }): React.ReactElement => {
  return (
    <StyledNav justifycontent="center">
      {protectedRoutes.map((route) =>
        route.display ? (
          route.submenus ? (
            <StyledNavDropdownMenu key={route.path}>
              <StyledNavLink to={route.path}>{route.display}</StyledNavLink>
              {isLoggedIn && (
                <StyledNavDropdownMenuContent>
                  {route.submenus.map((subroute) => (
                    <StyledNavLinkDropdown key={subroute.path} to={subroute.path}>
                      {subroute.display}
                    </StyledNavLinkDropdown>
                  ))}
                </StyledNavDropdownMenuContent>
              )}
            </StyledNavDropdownMenu>
          ) : (
            <StyledNavLink key={route.path} to={route.path}>
              {route.display}
            </StyledNavLink>
          )
        ) : null,
      )}
    </StyledNav>
  )
}

export default Header
