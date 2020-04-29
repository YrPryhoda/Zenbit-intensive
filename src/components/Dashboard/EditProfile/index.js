import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import EditProfile from './EditProfile';
import { withRouter } from 'react-router-dom';
import { editProfileById } from 'redux/actions/dashboard';
import { onEventMsg } from 'redux/actions/auth';
import './edit-profile.scss';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  onErrorField: state.auth.eventMsg
})
const mapDispatchToProps = {
  onEventMsg, editProfileById
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditProfile));