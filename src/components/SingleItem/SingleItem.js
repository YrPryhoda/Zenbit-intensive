import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getItemById } from 'redux/actions/shop';
import { addToCart } from 'redux/actions/cart';
import SingleItemRender from './SingleItemRender';
import Spinner from 'components/UI/Spinner';
import './single-item.scss';

const SingleItem = ({
  getItemById,
  addToCart,
  match,
  auth: { user, isLogin },
  shop: { loading, singleProduct }
}) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    getItemById(match.params.id);
  }, [getItemById, match.params.id]);
  const onChangeCount = e => setCount(e.target.value);
  const incBtn = useRef(null);
  const decBtn = useRef(null);
  const onCountClick = (math) => {
    let i = count;
    const disabledClass = 'btn-disabled';
    switch (math) {
      case '--':
        if (i < 2) return decBtn.current.classList.add(disabledClass);
        incBtn.current.classList.remove(disabledClass);
        return setCount(--i);
      case '++':
        (i > 0) && decBtn.current.classList.remove(disabledClass);
        (i >= 19) && incBtn.current.classList.add(disabledClass);
        return setCount(++i);
      default:
        return;
    }
  }
  const onBuyClick = () => {
    isLogin && addToCart(user.id, singleProduct, count);
  }

  return (
    <div className='my-container'>
      {loading ? <Spinner /> : <SingleItemRender
        singleProduct={singleProduct}
        count={count}
        onChangeCount={onChangeCount}
        onCountClick={onCountClick}
        incBtn={incBtn} decBtn={decBtn}
        onBuyClick={onBuyClick}
      />
      }
    </div>
  )
}

SingleItem.propTypes = {
  shop: PropTypes.object.isRequired,
  getItemById: PropTypes.func.isRequired,
  addToCart: PropTypes.func,
  auth: PropTypes.object
}
const mapStateToProps = (state) => ({
  shop: state.shop,
  auth: state.auth
})
const mapDispatchToProps = {
  getItemById, addToCart
}
export default connect(
  mapStateToProps, mapDispatchToProps)(
    SingleItem)
