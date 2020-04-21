import React from 'react'
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const RegisterForm = ({
  regData: { name, login, password, confirmPassword },
  onChange,
  onRegisterClick,
  eventMsg
}) => <Layout className='login-form'>
    <form className='form-form'
      onSubmit={e => onRegisterClick(e)}>
      <h2 className='large-h2'> Регистрация</h2>
      <div className='error-div' >
        {
          !!eventMsg.length && (
            <p className={`${eventMsg[eventMsg.length - 1].type}-msg`}>
              {eventMsg[eventMsg.length - 1].message}
            </p>
          )
        }
      </div>
      <div className='form-info' >
        <p> * - обязательные для заполнения поля</p>
      </div>
      <div className='form-field' >
        <label htmlFor='name' className='form-label'> Ваше имя  </label>
        <input type='text'
          name='name'
          id='name'
          className='form-input input-login'
          value={name}
          placeholder='Укажите свое имя'
          onChange={e => onChange(e)} />
      </div>
      <div className='form-field' >
        <label htmlFor='login' className='form-label'> Ваш логин  </label>
        <input type='text'
          name='login'
          id='login'
          className='form-input input-login'
          value={login}
          placeholder=' * Тут должен быть Ваш логин'
          onChange={e => onChange(e)} />
      </div>
      <div className='form-field' >
        <label htmlFor='password' className='form-label'> Ваш пароль  </label>
        <input type='password'
          name='password'
          id='password'
          className='form-input input-password'
          value={password}
          placeholder='* Место для пароля'
          onChange={e => onChange(e)} />
      </div>
      <div className='form-field' >
        <label htmlFor='confirmPassword' className='form-label'> Подтвердите пароль  </label>
        <input type='password'
          name='confirmPassword'
          id='confirmPassword'
          className='form-input input-password'
          value={confirmPassword}
          placeholder='* Введите свой пароль еще раз'
          onChange={e => onChange(e)} />
      </div>
      <div className='form-field' >
        <input type='submit' value='Регистрация'
          className='button button-submit' />
      </div>
      <div className='form-field' >
        <p>
          У вас уже есть аккаунт? <Link to='/login'> Войдите!</Link>
        </p>
      </div>
    </form>
  </Layout>



export default RegisterForm

