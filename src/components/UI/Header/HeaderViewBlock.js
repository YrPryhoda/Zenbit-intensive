import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingOutlined, ContactsOutlined,
  UserOutlined, GoogleOutlined, CheckCircleOutlined,
  LockOutlined, ShoppingCartOutlined, LogoutOutlined
} from '@ant-design/icons';
const HeaderView = ({
  isLogin,
  onLogout,
  selectedItems,
  onHomeClick
}) => (
    <div className='root-header' name='top'>
      <div className="header" >
        <div className="logo-and-nav">
          <div className='logo'>
            <div className='span'>
              <Link to='/page/1'
                onClick={onHomeClick}>
                <GoogleOutlined className='logo-img' />
                <CheckCircleOutlined className='logo-img' />
              </Link>
            </div>
          </div>
          <div className='nav-icons'>
            <div className='span'>
              <Link to='/page/1'
                onClick={onHomeClick}>
                <ShoppingOutlined className='shorticon' />
                <span className='small-sm'>Товари</span>
              </Link>
            </div>
          </div>
          <div className='nav-icons'>
            <div className='span'>
              <Link to='/contacts'>
                <ContactsOutlined className='shorticon' />
                <span className='small-sm'>Контакты</span>
              </Link>
            </div>
          </div>
        </div>
        {
          !isLogin ? (
            <div className='loggined-icons'>
              <div className='nav-icons'>
                <Link to='/login'>
                  <LockOutlined className='shorticon' />
                  <span className='small-sm'>
                    Войти
              </span>
                </Link>
              </div>
            </div>
          ) : (
              <div className='loggined-icons'>
                <div className='nav-icons'>
                  <div className='span'>
                  <Link to='/dashboard'>
                    <UserOutlined className='shorticon' />
                    <span className='small-sm'>Кабинет</span>
                    </Link>
                  </div>
                </div>
                <div className='nav-icons'>
                  <div className='span' id='new-item'>
                    <Link to='/shopping-cart'>
                      {selectedItems > 0 && (
                        <span className='short-cart-icon'>{selectedItems}</span>
                      )}
                      <ShoppingCartOutlined className='shorticon' />
                      <span className='small-sm'>Корзина</span>
                    </Link>
                  </div>
                </div>
                <div className='nav-icons exit' onClick={onLogout}>
                  <div className='span'>
                    <LogoutOutlined className='shorticon ' />
                    <span className='small-sm'>Выйти</span>
                  </div>
                </div>
              </div>
            )}
      </div>
    </div>
  )

export default HeaderView
