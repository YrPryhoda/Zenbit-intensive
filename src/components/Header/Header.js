import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import HeaderViewBlock from './HeaderViewBlock';
import {logout} from '../../redux/actions/auth';
import './header.scss';

const Header = ({ logout, auth:{ isLogin } }) => {
const onLogout = () => logout();
  return  <HeaderViewBlock isLogin={isLogin} onLogout={onLogout} />
}

Header.propTypes = {
auth: PropTypes.object,
logout: PropTypes.func
}

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = {
  logout
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
