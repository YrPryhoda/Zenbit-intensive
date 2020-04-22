import React from 'react';
import { Link } from 'react-router-dom';

const CartBlock = ({ items, onRemove, totalPrice }) => (

  <div className='cart-block'>
    <h2 className='container-title'>Корзина товаров</h2>
    {items.length > 0 ? (
        <div className='table-box'>
          <table className='cart-table'>
            <thead>
              <tr>
                <th>№</th>
                <th>Название</th>
                <th>Цена за еденицу</th>
                <th>Количество</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {items.map((el, i) => (
                <tr key={el.id}>
                  <td>{i + 1}</td>
                  <td>{el.title}</td>
                  <td className='center'>{el.price}</td>
                  <td className='center'>{el.count}</td>
                  <td className='center'>
                    <button className='button button-delete'
                      onClick={e => onRemove(el.id)}
                    >Удалить</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan='3'>
                  Общая сумма:
            </td>
                <td colSpan='2' className='center'>
                  {totalPrice} грн
          </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
          <p className='cart-info'> В корзине еще нет товаров,
вы можете вернуться назад и <Link to='/'> выбрать что то в каталоге </Link>
          </p>
        )}
  </div>
)
export default CartBlock
