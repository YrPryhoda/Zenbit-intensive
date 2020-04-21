import React from 'react';
import { Layout } from 'antd';
import { Redirect, Link } from 'react-router-dom';
const LoginForm = ({
  isLogin, onChange, onSubmit,
  eventMsg,
  form: { login, password }
}) => {
 /*  if (isLogin) {
    return (<Redirect to='/' />)
  } */
  return (
    <Layout className='login-form'>
      <form className='form-form'
        onSubmit={e => onSubmit(e)}>
        <h2 className='large-h2'> Вход в личный кабинет</h2>
        <div className='error-div' >
          {
            !!eventMsg.length && (
              <p className={`${eventMsg[eventMsg.length - 1].type}-msg`}>
                {eventMsg[eventMsg.length - 1].message}
              </p>
            )
          }
        </div>
        <div className='form-field' >
          <label htmlFor='username' className='form-label'> Ваш логин  </label>
          <input type='text'
            name='login'
            id='username'
            className='form-input input-login'
            value={login}
            placeholder='Тут должен быть Ваш логин'
            onChange={e => onChange(e)} />
        </div>
        <div className='form-field' >
          <label htmlFor='password' className='form-label'> Ваш пароль  </label>
          <input type='password'
            name='password'
            id='password'
            className='form-input input-password'
            value={password}
            placeholder='Место для пароля'
            onChange={e => onChange(e)} />
        </div>
        <div className='form-field' >
          <input type='submit' value='Войти'
            className='button button-submit' />
        </div>
        <div className='form-field' >
          <p>У вас еще нет аккаунта?
            <Link to='/registration'> Зарегистрируйтесь!</Link></p>
        </div>
      </form>
    </Layout>
  );
}

export default LoginForm
