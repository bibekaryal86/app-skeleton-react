import { connect } from 'react-redux'
import { userLogout } from '../actions/logout.action'
import Logout from './Logout'

const mapDispatchToProps = {
  userLogout: () => userLogout(),
}

export default connect(null, mapDispatchToProps)(Logout)
