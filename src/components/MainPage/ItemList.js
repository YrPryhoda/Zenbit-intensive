import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemList = ({
  item: { id, title, img, price, description },
  onClick, isBackSide, onAddToCart
}) => {
  let short;
  description.length > 140 && (short = `${description.slice(0, 140)}...`);
  return (
    <div className='card-container' >
      {
        id === isBackSide.id && isBackSide.isBack ? (
          <div
            className='card-description'
            onClick={e => onClick(id)}>
            {short}
            <Link to={`/products/${id}`}>
              {' '}Описание полностью
            </Link>
          </div>
        ) : (
            <img alt={`Фото ${title}`}
              src={img}
              onClick={e => onClick(id)} />
          )}
      <Link to={`/products/${id}`}>
        <h3>{title}</h3>
      </Link>
      <div className='card-buy'>
        <span>{`${price} грн`}</span>
        <button className='button btn-buy'
          onClick={e => onAddToCart(id)}>
          Купить
          </button>
      </div>
    </div >
  )
}

ItemList.propTypes = {
  item: PropTypes.object.isRequired
}

export default ItemList
