// components
import Alert from './components/Alert'
import Modal from './components/Modal'
import Spinner from './components/Spinner'
// form components
import Button from './forms/Button'
import Checkbox from './forms/Checkbox'
import HrefLink from './forms/HrefLink'
import Input, { InputType } from './forms/Input'
import RadioButton from './forms/RadioButton'
import Select from './forms/Select'
import Table from './forms/Table'
import TextArea from './forms/TextArea'
// reducers
import spinner from './reducers/spinner.reducer'
import alert from './reducers/alert.reducer'
// utils
import { AlertState, resetAlert, setAlert } from './utils/alerts'
import { getEndpoint } from './utils/endpoint'
// types
import { Async, FetchOptions, FetchResponse } from './utils/fetch'
import { LocalStorage } from './utils/localStorageHelper'
import { getStartOfTheMonth, getStartOfTheYear } from './utils/momentHelper'
import { SessionStorage } from './utils/sessionStorageHelper'
import { resetSpinner, setSpinner, SpinnerState } from './utils/spinner'
// exports
export { Alert, Modal, Spinner }
export { Button, Checkbox, HrefLink, Input, InputType, RadioButton, Select, Table, TextArea }
export { spinner, alert }
export {
  setAlert,
  resetAlert,
  getEndpoint,
  Async,
  LocalStorage,
  getStartOfTheMonth,
  getStartOfTheYear,
  SessionStorage,
  setSpinner,
  resetSpinner,
}
export type { FetchOptions, FetchResponse, AlertState, SpinnerState }
