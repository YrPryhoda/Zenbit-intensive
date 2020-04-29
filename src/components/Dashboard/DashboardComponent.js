import React from 'react'
import { Link } from 'react-router-dom'
import {
  FormOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';

const DashboardComponent = ({ user }) => (
  <div className="dashboard">
    <div className="header">
      <h2 className="large-h2">Добро пожаловать в личный кабинет</h2>
    </div>
    <div className="navigation">
      <button className="my-btn btn-personal-info">
        <Link to={`/dashboard/edit-profile/${user.id}`}>
          <FormOutlined className='profile-icon'/> {`  `}
          Редактировать данные
          </Link>
      </button>
      <button className="my-btn btn-cart">
        <Link to={`/shopping-cart`}>
          <ShoppingCartOutlined className='profile-icon'/> {`  `}
          Перейти к корзине
          </Link>
      </button>
    </div>
    <div className="personal-details">
      <h3 className="table-head">Ваши данные</h3>
      <table className="table-details">
        <tbody>
          <tr>
            <td className="subtitle">Ваш логин</td>
            <td className="subanswer">
              {user.login}
            </td>
          </tr>
          <tr>
            <td className="subtitle">Ваше имя</td>
            <td className="subanswer">
              {user.name ? user.name : 'Не указано'}
            </td>
          </tr>
          <tr>
            <td className="subtitle">Номер телефона</td>
            <td className="subanswer">
              {user.phone ? user.phone : 'Не указано'} </td>
          </tr>
          <tr>
            <td className="subtitle">Почта e-mail</td>
            <td className="subanswer">
              {user.email ? user.email : 'Не указано'} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default DashboardComponent
