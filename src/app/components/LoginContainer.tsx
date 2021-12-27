import { connect } from 'react-redux'
import { resetAlert, setAlert } from '../../common/utils/alerts'
import Login from './Login'
import { resetSpinner, setSpinner } from '../../common/utils/spinner'

const mapDispatchToProps = {
  setAlert: (type: string, messageKey: string) => setAlert(type, messageKey),
  resetAlert: () => resetAlert(),
  setSpinner: () => setSpinner(),
  resetSpinner: () => resetSpinner(),
}

export default connect(null, mapDispatchToProps)(Login)
