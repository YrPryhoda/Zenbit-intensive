import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getItemById } from '../../redux/actions/shop';
import SingleItemRender from './SingleItemRender';
import Spinner from '../Spinner';
import './single-item.scss';

const SingleItem = ({
  getItemById, match,
  shop: { loading, singleProduct }
}) => {
  const [count, setCount] = useState(singleProduct.productCount);
  useEffect(() => {
    getItemById(match.params.id);
  }, [getItemById]);
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
    console.log(count);
  }

  return loading ? <Spinner /> : <SingleItemRender
    singleProduct={singleProduct}
    count={count}
    onChangeCount={onChangeCount}
    onCountClick={onCountClick}
    incBtn={incBtn} decBtn={decBtn}
    onBuyClick={onBuyClick}
  />
}

SingleItem.propTypes = {
  shop: PropTypes.object.isRequired,
  getItemById: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  shop: state.shop
})
const mapDispatchToProps = {
  getItemById
}
export default connect(
  mapStateToProps, mapDispatchToProps)(
    SingleItem)
