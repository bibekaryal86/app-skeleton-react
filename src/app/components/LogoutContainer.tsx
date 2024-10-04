import { connect } from 'react-redux'

import Logout from './Logout'
import { userLogout } from '../actions/logout.action'

const mapDispatchToProps = {
  userLogout: () => userLogout(),
}

export default connect(null, mapDispatchToProps)(Logout)
