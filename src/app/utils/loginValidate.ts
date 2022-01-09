import { INPUT_REGEX_PATTERN } from '../../constants'

export const validateLogInInput = (username: string, password: string): boolean =>
  !!(
    username &&
    password &&
    username.length > 6 &&
    password.length > 6 &&
    username.length < 21 &&
    password.length < 21 &&
    INPUT_REGEX_PATTERN.test(username) &&
    INPUT_REGEX_PATTERN.test(password)
  )
