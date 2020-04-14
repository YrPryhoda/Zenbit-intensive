import React from 'react';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
const SingleItemRender = ({
  count, onChangeCount, onCountClick,
  incBtn, decBtn, onBuyClick,
  singleProduct: {
    id, title, img, price, description
  }
}) => {
  return (
    <div className='my-container'>
      <div className='single-container'>
        <div className='block-top'>
          <div className='top-img'>
            <img alt={`Изображение ${title}`} src={img} />
          </div>
          <div className='top-title'>
            <h2 className='title'>{title}</h2>
            <div className='top-buy'>
              <div >
                <button
                  className='btn-count'
                  onClick={e => onCountClick('--')}
                  ref={decBtn}>
                  <LeftCircleOutlined />
                </button>
                <input type='text'
                  className='count'
                  value={count}
                  onChange={e => onChangeCount(e)}
                  readOnly='readonly'
                />
                <button className='btn-count'
                  onClick={e => onCountClick('++')}
                  ref={incBtn}>
                  <RightCircleOutlined />
                </button>
              </div>
              <div className='price'>{`${price} грн`}</div>
            </div>
            <button className='button button-buy'
              onClick={e => onBuyClick(id)}>
              Добавить в корзину
            </button>
          </div>
        </div>
        <div className='block-bottom'>
          <p> {description}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleItemRender
