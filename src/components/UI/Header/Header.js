import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import HeaderViewBlock from './HeaderViewBlock';
import { logout, checkLogin } from 'redux/actions/auth';
import './header.scss';

const Header = ({
  logout, checkLogin,
  auth: { isLogin }, selectedItems
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    checkLogin();
    setCount(selectedItems)
  }, [setCount, selectedItems, checkLogin])
  const onLogout = () => logout();
  return <HeaderViewBlock
    isLogin={isLogin}
    onLogout={onLogout}
    selectedItems={count} />
}

Header.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func,
  cart: PropTypes.object
}

const mapStateToProps = state => ({
  auth: state.auth,
  selectedItems: state.cart.totalCount
});
const mapDispatchToProps = {
  logout, checkLogin
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
