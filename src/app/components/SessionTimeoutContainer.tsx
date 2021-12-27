import { connect } from 'react-redux'
import { userLogout } from '../actions/logout.action'
import SessionTimeout from './SessionTimeout'

const mapDispatchToProps = {
  userLogout: () => userLogout(),
}

export default connect(null, mapDispatchToProps)(SessionTimeout)
