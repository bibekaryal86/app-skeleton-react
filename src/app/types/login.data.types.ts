export interface LoginResponse {
  token: string
  userDetails: UserDetails
  errMsg?: string
}

export interface UserDetails {
  username: string
  firstName: string
  lastName: string
  streetAddress: string
  city: string
  state: string
  zipcode: string
  email: string
  phone: string
  status: string
}

export const DefaultUserDetails = {
  username: '',
  firstName: '',
  lastName: '',
  streetAddress: '',
  city: '',
  state: '',
  zipcode: '',
  email: '',
  phone: '',
  status: '',
}

export const DefaultLoginResponse: LoginResponse = {
  token: '',
  userDetails: DefaultUserDetails,
  errMsg: '',
}
