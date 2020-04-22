import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import HeaderViewBlock from './HeaderViewBlock';
import { logout } from 'redux/actions/auth';
import { showCartItems } from 'redux/actions/cart';
import './header.scss';

const Header = ({
  logout,
  auth: { isLogin, user },
  selectedItems,
  showCartItems
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    showCartItems(user.id);
  }, [showCartItems, user.id]);
  useEffect(() => {
    setCount(selectedItems)
  }, [setCount, selectedItems])
  const onLogout = () => logout();
  return <HeaderViewBlock
    isLogin={isLogin}
    onLogout={onLogout}
    selectedItems={count} />
}

Header.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func,
  showCartItems: PropTypes.func,
  selectedItems: PropTypes.number
}

const mapStateToProps = state => ({
  auth: state.auth,
  selectedItems: state.cart.totalCount
});
const mapDispatchToProps = {
  logout, showCartItems
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
