import React from 'react';
import { Layout } from 'antd';
import { Redirect } from 'react-router-dom';
const LoginForm = ({
  isLogin, onChange, onSubmit, errors,
  form: { username, password }
}) => {
  if (isLogin) {
    return (<Redirect to='/' />)
  }
  return (
    <Layout className='login-form'>
      <form className='form-form'
        onSubmit={e => onSubmit(e)}
      >
        <div className='error-div' >
          {
            errors && (<p className='error-msg'>{ errors }</p>)
          }
        </div>
        <div className='form-field' >
          <label htmlFor='username' className='form-label'> Ваш логин  </label>
          <input type='text'
            name='username'
            id='username'
            className='form-input input-login'
            value={username}
            placeholder='Тут должен быть Ваш логин'
            onChange={e => onChange(e)} />
        </div>
        <div className='form-field' >
          <label htmlFor='password' className='form-label'> Ваш пароль  </label>
          <input type='text'
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
      </form>
    </Layout>
  );
}

export default LoginForm
