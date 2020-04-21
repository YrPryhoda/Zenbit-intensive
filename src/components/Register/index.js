import { connect } from 'react-redux';
import RegisterContainer from './RegisterContainer';
import { getRegister, onEventMsg } from 'redux/actions/auth';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


RegisterContainer.propTypes = {
  auth: PropTypes.object,
  onEventMsg: PropTypes.func,
  getRegister: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = {
  onEventMsg, getRegister
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(
  withRouter(RegisterContainer));
