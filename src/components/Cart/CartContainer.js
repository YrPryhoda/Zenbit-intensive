import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartBlock from './CartBlock';
import Spinner from 'components/UI/Spinner';
import { removeFromCart, showCartItems } from 'redux/actions/cart.js'
import "./cart.scss";

const CartContainer = ({
  cart: { addedToCart, loading, totalPrice },
  removeFromCart, showCartItems,
  userId
}) => {
  useEffect(() => {
    showCartItems(userId);
  }, [showCartItems, userId])
  const onRemoveItem = (id) => {
    removeFromCart(userId, id);
  }
  return (
    <div className='cart-container'>
      {
        loading ? <Spinner /> : <CartBlock
          items={addedToCart}
          onRemove={onRemoveItem}
          totalPrice={totalPrice}
        />
      }
    </div>
  )
}
CartContainer.propTypes = {
  removeFromCart: PropTypes.func,
  showCartItems: PropTypes.func,
  cart: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  cart: state.cart,
  userId: state.auth.user.id
})
const mapDispatchToProps = {
  removeFromCart, showCartItems
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
