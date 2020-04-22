import Contacts from './Contacts';
import { connect } from 'react-redux';
import { askQuestion } from 'redux/actions/shop';
import { onEventMsg } from 'redux/actions/auth';
import PropTypes from 'prop-types'
import './contacts.scss';

Contacts.propTypes = {
  user: PropTypes.object,
  askQuestion: PropTypes.func,
  onEventMsg: PropTypes.func
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  eventMsg: state.auth.eventMsg
})

const mapDispatchToProps = {
  askQuestion, onEventMsg
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);