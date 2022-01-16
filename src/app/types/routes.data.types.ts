import { ReactElement } from 'react'

interface RouteCore {
  path: string
  display?: string
  element: ReactElement
}

interface RouteSubMenu extends RouteCore {
  subroutes: RouteCore[]
}

export interface RoutesType extends RouteCore {
  subroutes?: RouteCore[]
  submenus?: RouteSubMenu[]
}
