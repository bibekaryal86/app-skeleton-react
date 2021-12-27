import { MSG_KEY_FAIL_SIGNIN, MSG_KEY_SOMETHING_WENT_WRONG } from '../../common/utils/constants'
import { Async, FetchOptions } from '../../common/utils/fetch'
import { DefaultLoginResponse, LoginResponse } from '../types/login.data.types'

export const userLogin = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const loginEndpoint = 'http://localhost:6001/health-data/user_details/login'
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
