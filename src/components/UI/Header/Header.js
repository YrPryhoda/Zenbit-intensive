import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderViewBlock from './HeaderViewBlock';
import { logout } from 'redux/actions/auth';
import { showCartItems } from 'redux/actions/cart';
import { showAvilableItems } from 'redux/actions/shop';
import './header.scss';

const Header = ({
  logout,
  auth: { isLogin, user },
  selectedItems,
  showCartItems,
  showAvilableItems,
  shop: {
    database,
    pagination: {
      itemsOnPage,
      category
    }
  }
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    showCartItems(user.id);
  }, [showCartItems, user.id]);
  useEffect(() => {
    setCount(selectedItems)
  }, [setCount, selectedItems])
  const onLogout = () => logout();
  const onHomeClick = () => {
    showAvilableItems(
      database,
      {params:{page: 1}},
      itemsOnPage,
      category
    );
  }

  return <HeaderViewBlock
    isLogin={isLogin}
    onLogout={onLogout}
    selectedItems={count}
    onHomeClick={onHomeClick
    } />
}

Header.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func,
  showCartItems: PropTypes.func,
  selectedItems: PropTypes.number
}

const mapStateToProps = state => ({
  auth: state.auth,
  selectedItems: state.cart.totalCount,
  shop: state.shop
});
const mapDispatchToProps = {
  logout, showCartItems, showAvilableItems
}
export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Header));
