import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import DashboardComponent from './DashboardComponent';
import {withRouter} from 'react-router-dom';
import './dashboard.scss';


const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(
  mapStateToProps
)(withRouter(DashboardComponent));