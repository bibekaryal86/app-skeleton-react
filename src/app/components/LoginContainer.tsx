import { connect } from 'react-redux'

import Login from './Login'
import { resetAlert, resetSpinner, setAlert, setSpinner } from '../../common'

const mapDispatchToProps = {
  setAlert: (type: string, messageKey: string) => setAlert(type, messageKey),
  resetAlert: () => resetAlert(),
  setSpinner: () => setSpinner(),
  resetSpinner: () => resetSpinner(),
}

export default connect(null, mapDispatchToProps)(Login)
