import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { login, onLoginError } from '../../redux/actions/auth';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import './login.scss';

const Login = ({ auth: { isLogin, errors }, login, onLoginError, history }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const onChange = e => setForm({
    ...form, [e.target.name]: e.target.value
  })
  const onSubmit = e => {
    e.preventDefault();
    let key = 0;
    for ( key in form) {
      switch (true) {
        case form[key].trim().length === 0:
          return onLoginError('Поле не может быть пустым');
        case key === 'username' && form[key].trim().length < 2:
          return onLoginError('Имя не может быть меньше 2 символов');
        case key === 'password' && form[key].trim().length < 6:
          return onLoginError('Пароль не может быть короче 6 символов');
        default:
          continue;
      }
    }
    if (!errors) {
      login(form);
      history.push('/');
    }
  }
  return <LoginForm
    isLogin={isLogin}
    errors={errors}
    onChange={onChange}
    onSubmit={onSubmit}
    form={form}
  />
}
Login.propTypes = {
  auth: PropTypes.object,
  login: PropTypes.func,
  onLoginError: PropTypes.func
}
const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = {
  login, onLoginError
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(
  withRouter(Login)
);
