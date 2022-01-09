export const INPUT_REGEX_PATTERN = /^[A-Za-z0-9]+$/

export const ALERT_TYPE_SUCCESS = 'success'
export const ALERT_TYPE_FAILURE = 'failure'
export const ALERT_TYPE_INFO = 'info'
export const ALERT_TYPE_WARN = 'warn'

export const checkBoxOptionsYesNo = [
  { value: 'YES', text: 'YES' },
  { value: 'NO', text: 'NO' },
]

export const TABLE_SORT_DIRECTION_ASCENDING = 'ASC'
export const TABLE_SORT_DIRECTION_DESCENDING = 'DESC'
export const TABLE_SORTED_ASC_CODE = 8657
export const TABLE_SORTED_DESC_CODE = 8659
export const TABLE_SORTED_NONE_CODE = 8205
export const TABLE_EXPORT_KEYS_TO_AVOID = ['actions', 'Actions']
export const TABLE_EXPORT_KEY_FOR_TITLE = 'title'

export const DATE_FORMAT_MATCHER_REGEX = new RegExp('[0-9]{4}\\-[0-9]{2}\\-[0-9]{2}')
export const CURRENCY_FORMAT_MATCHER_REGEX = new RegExp('^\\$|\\-\\$(\\d{1,3}(\\,\\d{3})*|(\\d+))(\\.\\d{1,2})?$')

export const MSG_KEY_SOMETHING_WENT_WRONG = 'GENERIC_ERROR'
export const MSG_KEY_INVALID_SIGNIN = 'INVALID_SIGNIN'
export const MSG_KEY_FAIL_SIGNIN = 'FAIL_SIGNIN'
export const MSG_KEY_SIGNIN_FIRST = 'SIGNIN_FIRST'
export const MSG_KEY_SESSION_INVALID = 'INVALID_SESSION'

export const ALERT_MESSAGES = new Map([
  [MSG_KEY_SOMETHING_WENT_WRONG, 'Something Went Wrong! Please Try Again!!!'],
  [MSG_KEY_INVALID_SIGNIN, 'Invalid Input! Please Try Again!!!'],
  [MSG_KEY_FAIL_SIGNIN, 'Invalid Username and/or Password! Please Try Again!!!'],
  [MSG_KEY_SIGNIN_FIRST, 'Please Sign In First!!!'],
  [MSG_KEY_SESSION_INVALID, 'Session Invalidated Due to Inactivity/Expiry! Please Sign In Again to Continue!!!'],
])
