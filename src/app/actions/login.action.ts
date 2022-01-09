import { MSG_KEY_FAIL_SIGNIN, MSG_KEY_SOMETHING_WENT_WRONG } from '../../constants'
import { Async, FetchOptions, getEndpoint } from '../../common'
import { DefaultLoginResponse, LoginResponse } from '../types/login.data.types'

export const userLogin = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const loginEndpoint = getEndpoint(process.env.LOGIN_ENDPOINT as string)
    const options: Partial<FetchOptions> = {
      method: 'POST',
      noAuth: true,
      requestBody: {
        username,
        password,
      },
    }

    const loginResponse = (await Async.fetch(loginEndpoint, options)) as LoginResponse

    if (loginResponse?.token?.length) {
      return loginResponse
    } else {
      console.log('Login Action Failed: ', loginResponse)
      return { ...DefaultLoginResponse, errMsg: MSG_KEY_FAIL_SIGNIN }
    }
  } catch (error) {
    console.log('Login Action Error: ', error)
    return { ...DefaultLoginResponse, errMsg: MSG_KEY_SOMETHING_WENT_WRONG }
  }
}
