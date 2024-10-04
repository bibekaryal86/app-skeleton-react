import { connect } from 'react-redux'

import SessionTimeout from './SessionTimeout'
import { userLogout } from '../actions/logout.action'

const mapDispatchToProps = {
  userLogout: () => userLogout(),
}

export default connect(null, mapDispatchToProps)(SessionTimeout)
